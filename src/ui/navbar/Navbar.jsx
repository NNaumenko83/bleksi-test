import React from 'react';
import Links from './links/Links';
import styles from './navbar.module.css';
import Link from 'next/link';
// import { auth } from '@/lib/auth';

async function Navbar() {
    // const session = await auth();
    const session = true;
    console.log('session:', session);

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Bleksi
            </Link>
            <div>{<Links session={session} />}</div>
        </div>
    );
}

export default Navbar;
