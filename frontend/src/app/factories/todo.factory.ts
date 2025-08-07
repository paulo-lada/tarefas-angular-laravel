import { Todo } from '../intefarces/todo.interface';

export function createDefaultTodo(): Todo {
  return {
    id: 0,
    title: '',
    completed: false,
  };
}