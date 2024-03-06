import { Injectable } from '@angular/core';
import { TODOS_MOCK_DATA } from '../common/todos-mock-data';
import { Todo } from '../common/interfaces-todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  async getTodos() {
    await sleep(1000);
    return [...TODOS_MOCK_DATA];
  }

  async addTodo(todo: Partial<Todo>) {
    await sleep(100);
    return {
        id: Math.random().toString(36).substring(2, 9),
        ...todo
    } as Todo;
  }

  async deleteTodo(id: string) {
    // simulated, so no actual call to backend
    await sleep(100);
  }

  async updateTodo(id: string, completed: boolean) {
    // simulated, so no actual call to backend
    await sleep(100);
  }
}

async function sleep(millis: number) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    })
}
