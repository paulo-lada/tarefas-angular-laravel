// todo.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TodoService } from './todo.service';
import { API_URL } from '../../constants';
import { Todo } from '../../intefarces/todo.interface';

describe('TodoService', () => {
    let service: TodoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TodoService]
        });
        service = TestBed.inject(TodoService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('Busca a lista de tarefas', () => {
        const mockData: Todo[] = [{ id: 1, title: 'Tarefa 1', completed: false }];

        service.getTodoList().then(data => {
            expect(data).toEqual(mockData);
        });

        const req = httpMock.expectOne(`${API_URL}tarefas`);
        expect(req.request.method).toBe('GET');
        req.flush(mockData);
    });

    it('Adiciona uma nova tarefa', () => {
        const newTodo: Todo = { id: 2, title: 'Nova tarefa', completed: false };

        service.addTodo('Nova tarefa').then(data => {
            expect(data).toEqual(newTodo);
        });

        const req = httpMock.expectOne(`${API_URL}tarefas`);
        expect(req.request.method).toBe('POST');
        req.flush(newTodo);
    });

    it('Atualiza o status de uma tarefa', () => {
        const updatedTodo: Todo = { id: 1, title: 'Tarefa 1', completed: true };

        service.toggleTodoCompletion(1, true).then(data => {
            expect(data).toEqual(updatedTodo);
        });

        const req = httpMock.expectOne(`${API_URL}tarefas/1`);
        expect(req.request.method).toBe('PUT');
        req.flush(updatedTodo);
    });

    it('Deleta uma tarefa', () => {
        service.removeTodo(1).then(response => {
            expect(response).toBeNull();
        });

        const req = httpMock.expectOne(`${API_URL}tarefas/1`);
        expect(req.request.method).toBe('DELETE');
        req.flush(null);
    });
});
