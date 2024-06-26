import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/ui/footer/Footer';
import Navbar from '@/ui/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: {
        default: 'Bleksi test Homepage',
        template: '%s | Bleksi test',
    },

    description: 'Implementation of google auth',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="container">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
