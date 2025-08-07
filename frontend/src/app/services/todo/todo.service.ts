import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Todo } from '../../intefarces/todo.interface';
import { API_URL } from '../../constants';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private endpoint = 'tarefas';

    constructor(private http: HttpClient) { }

    public async getTodoList(): Promise<Todo[]> {
        const httpObservable = this.http.get<Todo[]>(`${API_URL}${this.endpoint}`);

        return firstValueFrom(httpObservable);
    }

    public async addTodo(title: string): Promise<Todo> {
        const httpObservable = this.http.post<Todo>(`${API_URL}${this.endpoint}`, { title }, { withCredentials: true });

        return firstValueFrom(httpObservable);
    }

    public async removeTodo(id: number): Promise<void> {
        const httpObservable = this.http.delete<void>(`${API_URL}${this.endpoint}/${id}`);

        return firstValueFrom(httpObservable);
    }
}