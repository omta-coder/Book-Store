import express from 'express'
import { getBook,addBook } from '../controllers/bookController.js';

const router = express.Router();

router.post("/add",addBook)
router.get('/',getBook);

export default router;