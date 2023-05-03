import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { AuthorModel } from '../models/Author.js';

export class AuthorController {
  async createAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;

      const author = new AuthorModel({
        _id: new mongoose.Types.ObjectId(),
        name,
      });

      const response = await author.save();

      return res.status(200).json({ success: true, data: response, message: 'Author create success', error: null });
    } catch (error: any) {
      return res
        .status(500)
        .json({ success: true, data: null, message: 'Author create failed', error: { code: error.code, message: error.message } });
    }
  }

  async readAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const authorId = req.params.authorId;

      const response = await AuthorModel.findById(authorId);

      if (!response) {
        return res.status(400).json({ success: true, data: response, message: 'Author read success', error: null });
      }

      return res.status(400).json({ success: true, data: response, error: null });
    } catch (error: any) {
      return res
        .status(500)
        .json({ success: true, data: null, message: 'Author read failed', error: { code: error.code, message: error.message } });
    }
  }

  async readAllAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await AuthorModel.find();

      return res.status(200).json({ success: true, data: response, message: 'Author readAll success', error: null });
    } catch (error: any) {
      return res
        .status(500)
        .json({ success: true, data: null, message: 'Author readAll failed', error: { code: error.code, message: error.message } });
    }
  }

  async updateAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const authorId = req.params.authorId;

      const response = await AuthorModel.findById(authorId);

      if (!response) {
        return res.status(400).json({ success: true, data: response, message: 'Author not found', error: null });
      }

      const updateResponse = await AuthorModel.updateOne({ id: response.id }, { name });

      return res.status(200).json({ success: true, data: updateResponse, message: 'Author update success', error: null });
    } catch (error: any) {
      return res
        .status(500)
        .json({ success: true, data: null, message: 'Author update failed', error: { code: error.code, message: error.message } });
    }
  }

  async deleteAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const authorId = req.params.authorId;

      const response = await AuthorModel.findByIdAndDelete(authorId);

      return res.status(200).json({ success: true, data: response, message: 'Author delete success', error: null });
    } catch (error: any) {
      return res
        .status(500)
        .json({ success: true, data: null, message: 'Author delete failed', error: { code: error.code, message: error.message } });
    }
  }
}
