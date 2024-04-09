import Image from 'next/image';
import styles from './home.module.css';
import Link from 'next/link';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    Your Story Begins Here: Join Our Blog Community.
                </h1>
                <div className={styles.buttons}>
                    <Link href="/login" />
                </div>
            </div>
        </div>
    );
};

export default Home;
