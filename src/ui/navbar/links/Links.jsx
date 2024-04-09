'use client';
import React, { useState } from 'react';
import styles from './links.module.css';
import Image from 'next/image';
import { NavLink } from './navlink/navLink';

// import { handleLogout } from '@/lib/action';

const links = [
    {
        title: 'Homepage',
        path: '/',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
];

function Links({ session }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink item={link} key={link.path} />
                ))}
                {session ? (
                    /* .user ? */ <>
                        <p>Logout</p>
                        {/* <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form> */}
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login' }} />
                )}
            </div>

            <Image
                className={styles.menuButton}
                src="/menu.png"
                alt=""
                width={30}
                height={30}
                onClick={() => setOpen(!open)}
            />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map(link => (
                        <NavLink item={link} key={link.path} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Links;
