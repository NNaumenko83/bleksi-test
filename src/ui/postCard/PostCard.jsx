import React from 'react';
import styles from './PostCard.module.css';
import Image from 'next/image';

const PostCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && (
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            alt=""
                            src={post.img}
                            fill
                        />
                    </div>
                )}
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
            </div>
        </div>
    );
};

export default PostCard;
