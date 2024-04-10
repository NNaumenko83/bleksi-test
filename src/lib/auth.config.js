export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [],
    callbacks: {
        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
            const isOnLoginPage =
                request.nextUrl?.pathname.startsWith('/login');

            //  ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
            if (!user && isOnBlogPage) {
                return false;
            }

            //  ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

            if (user && isOnLoginPage) {
                return Response.redirect(new URL('/', request.nextUrl));
            }

            return true;
        },
    },
};
