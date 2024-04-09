import { handleGoogleLogin } from '@/lib/action';
import styles from './login.module.css';

import React from 'react';

export const metadata = {
    title: 'Login page',
    description: 'Login page',
};
async function LoginPage() {
    return (
        <div className={styles.container}>
            <form action={handleGoogleLogin}>
                <button className={styles.button}>Login with Google</button>
            </form>
        </div>
    );
}

export default LoginPage;
