import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { TodosStore } from '../../store/todos.store';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { TodoComponent } from '../todo/todo.component';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-todos-view',
  standalone: true,
  imports: [
    JsonPipe,
    TodosListComponent,
    TodoComponent,
],
  templateUrl: './todos-view.component.html',
  styleUrl: './todos-view.component.scss',
  providers: [TodosStore],
})
export class TodosViewComponent implements OnInit {

    store = inject(TodosStore);

    constructor() {

        effect(() => {
            const state = getState(this.store);
            // console.log('tV ctor eff state.todo: ', state.todo)
            // console.log('tV ctor eff state.todos: ', state.todos)
        });
    }

    ngOnInit(): void {
        this.loadTodos()
            .then(() => {
            // console.log('tV ngOI this.store.todos(): ', this.store.todos())
            });
    }

    async loadTodos() {
        await this.store.loadAll().then(() => {

        });
    }

    printToScreen() {
        // console.log('tV ngOI this.todos(): ', this.todos())
        // console.log('tV ngOI this.todo(): ', this.todo())

    }
}
