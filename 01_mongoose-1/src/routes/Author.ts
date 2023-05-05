import express from 'express';
import { AuthorController } from '../controllers/Author.js';

export const AuthorRouter = express.Router();
const authorController = new AuthorController();

AuthorRouter.post('/create', authorController.createAuthor);
AuthorRouter.get('/get/:authorId', authorController.readAuthor);
AuthorRouter.get('/getAll', authorController.readAllAuthor);
AuthorRouter.patch('/update/:authorId', authorController.updateAuthor);
AuthorRouter.delete('/delete/:authorId', authorController.deleteAuthor);
