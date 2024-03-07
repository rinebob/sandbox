import { Component, OnInit, computed, effect, input } from '@angular/core';
import { Todo } from '../../common/interfaces-todos';
import { TODO_INITIALIZER } from '../../common/constants-todos';

@Component({
  selector: 'sg-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

    todo = input.required<Todo>();
    
    otherTodo = input<Todo>(TODO_INITIALIZER, {
        alias: 'someTodo',
    });

    description = computed(() => {
        const todo = this.todo();
        return `${todo.id}-${todo.title}-status: ${todo.completed ? 'completed' : 'pending'}`;
    });

    constructor() {
        effect(() => {
            // console.log('t ctor eff.  input todo change: ', this.todo());
        });
    }

    doSomething(todo: Todo) {
        console.log('t @i otherTodo: ', todo); 
        return todo;
    }

}
