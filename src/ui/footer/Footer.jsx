import React from 'react';
import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Bleksi</div>
            <p>Created by Mykola Naumenko</p>
        </div>
    );
}

export default Footer;
