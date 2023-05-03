import mongoose, { Schema, Document } from 'mongoose';

export interface Author {
  name: string;
}

export interface AuthorModel extends Author, Document {}

const schema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export const AuthorModel = mongoose.model<AuthorModel>('authors', schema)