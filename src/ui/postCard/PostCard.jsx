import React from 'react';
import styles from './PostCard.module.css';
import Image from 'next/image';
import { format } from 'date-fns';

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
                <span className={styles.date}>
                    {format(new Date(post.createdAt), 'dd.MM.yyyy')}
                </span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
            </div>
        </div>
    );
};

export default PostCard;
