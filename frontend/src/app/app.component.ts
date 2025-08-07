import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from './intefarces/todo.interface';
import { createDefaultTodo } from './factories/todo.factory';
import { TodoService } from './services/todo/todo.service';
import { MessageHandlerService } from './services/message-handler/message-handler.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public todoList: Todo[] = [];
  public newTodo: Todo = createDefaultTodo();

  constructor(
    private todoService: TodoService,
    private messageHandler: MessageHandlerService
  ) { }

  async ngOnInit() {
    await this.loadTodoList();
  }

  async loadTodoList() {
    try {
      this.todoList = await this.todoService.getTodoList();
      
      this.messageHandler.handleSuccess('Lista de tarefas carregada com sucesso. Tarefas disponíveis: ' + this.todoList.length);
    } catch (error) {
      this.messageHandler.handleError('Erro ao carregar a lista de tarefas. Iniciando lista offline.', error);

      this.todoList = [
        { id: 1, title: 'Tarefa offline 1', completed: false },
        { id: 2, title: 'Tarefa offline 2', completed: true }
      ];
    }
  }

  async addTodo() {
    if (!this.newTodo.title.trim()) return;

    try {
      const newTodo = await this.todoService.addTodo(this.newTodo.title);

      this.todoList.push(newTodo);
      this.newTodo = createDefaultTodo();

      this.messageHandler.handleSuccess('Nova tarefa adicionada com sucesso!');
    } catch (error) {
      this.messageHandler.handleError('Erro ao adicionar nova tarefa. Tente novamente mais tarde.', error);
    }
  }

  async toggleTodoCompletion(todo: Todo) {
    try {
      await this.todoService.toggleTodoCompletion(todo.id, !todo.completed);

      await this.loadTodoList();

      this.messageHandler.handleSuccess('Tarefa atualizada com sucesso!');
    } catch (error) {
      this.messageHandler.handleError('Erro ao atualizar tarefa. Tente novamente mais tarde.', error);
    }
  }

  async removeTodo(id: number) {
    try {
      await this.todoService.removeTodo(id);

      await this.loadTodoList();

      this.messageHandler.handleSuccess('Tarefa removida com sucesso!');
    } catch (error) {
      this.messageHandler.handleError('Erro ao remover tarefa. Tente novamente mais tarde.', error);
    }
  }
}