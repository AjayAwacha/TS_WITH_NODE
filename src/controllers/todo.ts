import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const ALL_TODOS: Todo[] = [];

export const addTodo: RequestHandler = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new Todo(Math.random().toString(), text);
    ALL_TODOS.push(newTodo);

    res.status(200).json({message: 'New Todo Add.'});
}

export const getAllTodo: RequestHandler = (req, res, next) => {
    res.status(200).json({todos: ALL_TODOS});
}

export const updateTodo: RequestHandler = (req, res, next) => {
    const todoId: string = req.params.id;
    const todoText = req.body.text;

    const todoIndex = ALL_TODOS.findIndex(ele => ele.id == todoId);
    ALL_TODOS[todoIndex] = new Todo(todoId, todoText);

    res.status(200).json({message: 'Todo item update'});
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;

    const todoIndex = ALL_TODOS.findIndex(ele => ele.id == todoId);

    ALL_TODOS.splice(todoIndex, 1);
    res.status(200).json({message: 'Todo item delete'});
}