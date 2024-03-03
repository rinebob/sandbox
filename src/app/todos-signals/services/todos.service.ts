import { Injectable } from '@angular/core';
import { TODOS_MOCK_DATA } from '../common/todos-mock-data';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  async getTodos() {
    await sleep(1000);
    return [...TODOS_MOCK_DATA];
  }
}

async function sleep(millis: number) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    })
}
