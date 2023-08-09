import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import User, { IUser } from './user.model';

export interface IPost {
  name: string;
  description: string;
  user_id: number;
  user: IUser;
}

@Table({ tableName: 'posts', timestamps: false })
export default class Post extends Model<Post> implements IPost {
  @Column({})
  name: string;

  @Column({})
  description: string;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user!: User;
}
