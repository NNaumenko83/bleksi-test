import { Post, User } from './models';
import { connectToDb } from './utils';

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        throw new Error('Failed to fetch posts!', error.message);
    }
};

export const getPost = async slug => {
    try {
        connectToDb();
        const post = await Post.findOne({ slug });
        return post;
    } catch (error) {
        throw new Error('Failed to fetch post!', error.message);
    }
};

export const getUser = async id => {
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw new Error('Failed to fetch user!', error.message);
    }
};

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error('Failed to fetch users!', error.message);
    }
};
