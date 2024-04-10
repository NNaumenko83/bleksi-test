import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { connectToDb } from './utils';
import { User } from './models';
import { authConfig } from './auth.config';

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
      
            if (account.provider === 'google') {
                connectToDb();
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (!user) {
                        const newUser = new User({
                            username: profile.name,
                            email: profile.email,
                            image: profile.picture,
                        });
                        await newUser.save();
                    }
                } catch (error) {
                
                    return false;
                }
            }
            return true;
        },
        ...authConfig.callbacks,
    },
});
