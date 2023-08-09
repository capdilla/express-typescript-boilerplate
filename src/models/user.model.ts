import { Table, Column, Model, HasMany } from 'sequelize-typescript';

import Post, { IPost } from './posts.model';

export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  posts: IPost[];
}

@Table({
  tableName: 'users',
  timestamps: false,
})
export default class User extends Model<IUser> implements IUser {
  @Column({})
  firstName: string;

  @Column({})
  lastName: string;

  @Column({})
  age: number;

  @HasMany(() => Post)
  posts: Post[];
}

// export type IUser = Fields<User>;
