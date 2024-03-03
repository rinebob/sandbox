import { Component, OnInit, inject } from '@angular/core';
import { TodosStore } from '../../store/todos.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todos-view',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './todos-view.component.html',
  styleUrl: './todos-view.component.scss'
})
export class TodosViewComponent implements OnInit {

    store = inject(TodosStore);

    ngOnInit(): void {
        this.loadTodos()
            .then(() => console.log('tV ngOI loaded todos'));
    }

    async loadTodos() {
        await this.store.loadAll();
    }
}
