import { Router } from "express";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "../controllers/todo";

const router = Router();

router.post('/', addTodo);

router.get('/', getAllTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;