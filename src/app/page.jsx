import { auth } from '@/lib/auth';
import styles from './home.module.css';
import Link from 'next/link';

const Home = async () => {
    const session = await auth();
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    Your Story Begins Here:
                    <br />
                    Join Our Blog Community.
                </h1>

                {!session?.user && (
                    <Link className={styles.login} href="/login">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Home;
