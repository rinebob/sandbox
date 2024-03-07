import { Component, OnInit, effect, inject, input, viewChild } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TodosFilter, TodosStore } from '../../store/todos.store';
import { Todo } from '../../common/interfaces-todos';

@Component({
  selector: 'sg-todos-list',
  standalone: true,
  imports: [MatButtonToggleModule, MatCheckboxModule, MatFormFieldModule, MatLabel, MatInputModule, MatIconModule, MatListModule, MatSuffix, MatProgressSpinnerModule, NgStyle],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent implements OnInit {

    todos = input<Todo[]>()

    store = inject(TodosStore);

    filter = viewChild.required(MatButtonToggleGroup);

    constructor() {
        effect(() => {
            const filter = this.filter();
            filter.value = this.store.filter();
            // console.log('tL ctor filter button group: ', filter);
        });
    }

    ngOnInit(): void {
        // console.log('tL ngOI input todos: ', this.todos());
    }

    async onAddTodo(title: string) {
        await this.store.addTodo(title);
    }

    async onViewTodo(id: string, event: MouseEvent) {
        event.stopPropagation();
        // console.log('tL oVT view todo id: ', id);
        await this.store.viewTodo(id);
    }
    
    async onDeleteTodo(id: string, event: MouseEvent) {
        event.stopPropagation();
        await this.store.deleteTodo(id);
    }

    async onTodoToggled(id: string, completed: boolean) {
        console.log('tL oTT id/comp: ', id, completed);
        await this.store.updateTodo(id, completed);
    }

    onFilterTodos(event: MatButtonToggleChange) {
        const filter = event.value as TodosFilter;
        this.store.updateFilter(filter);
    }

}
