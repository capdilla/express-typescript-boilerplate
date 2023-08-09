import Post, { IPost } from '../models/posts.model';
import User, { IUser } from '../models/user.model';

const createUser = async () => {
  const user = await User.create({
    age: 2,
    firstName: 'Carlos',
    lastName: 'Padilla',
  } as IUser);

  return user;
};

const createPost = async () => {
  const post = await Post.create({
    description: 'Test',
    name: 'A Pst',
    user_id: 1,
  } as any);

  return post;
};

const getAllUser = async () => {
  const users = await User.findAll({ include: [{ model: Post }] });

  return users;
};

const findOne = async (userId: number) => {
  const users = await User.findOne({ where: { id: userId } });

  return users;
};

const getAllPost = async () => {
  const posts = await Post.findAll({ include: [{ model: User }] });

  return posts;
};

export default {
  createUser,
  createPost,
  getAllUser,
  getAllPost,
  findOne,
};
