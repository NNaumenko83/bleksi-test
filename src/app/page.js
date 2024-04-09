import styles from './home.module.css';
import Link from 'next/link';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    Your Story Begins Here: Join Our Blog Community.
                </h1>

                <Link className={styles.login} href="/login">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Home;
