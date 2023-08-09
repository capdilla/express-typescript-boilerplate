import { Model } from 'sequelize-typescript';

type Fields<T> = Omit<T, keyof Pick<Model<any>, keyof Model<any>>>;

export default Fields;
