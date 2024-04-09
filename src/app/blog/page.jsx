import React from 'react';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';
import PostCard from '@/ui/postCard/PostCard';

async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map(post => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
}

export default BlogPage;
