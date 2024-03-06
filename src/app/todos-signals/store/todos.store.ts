import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Todo } from "../common/interfaces-todos";
import { computed, inject } from "@angular/core";
import { TodosService } from "../services/todos.service";

export type TodosFilter = 'all' | 'pending' | 'completed';

type TodosState = {
    todos: Todo[];
    loading: boolean;
    filter: TodosFilter;
}

const initialState: TodosState = {
    todos: [],
    loading: false,
    filter: 'completed',
}

export const TodosStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    
    withMethods(
        (store, todosService = inject(TodosService)) => ({

            async loadAll() {

                patchState(store, {loading: true});

                const todos = await todosService.getTodos();

                patchState(store, {todos, loading: false});

            },

            async addTodo(title: string) {
                const todo = await todosService.addTodo({title, completed: false});

                patchState(store, (state) => ({
                    todos: [...state.todos, todo]
                }))
            },

            async deleteTodo(id: string) {
                await todosService.deleteTodo(id);

                patchState(store, (state) => ({
                    todos: state.todos.filter(todo => todo.id !== id)
                }))
            },

            async updateTodo(id: string, completed: boolean) {
                await todosService.updateTodo(id, completed);
                console.log('tSto wM updateTodo. id/completed: ', id, completed);

                patchState(store, (state) => ({
                    todos: state.todos.map(todo => todo.id == id ? {...todo, completed} : todo)
                }));

            },

            updateFilter(filter: TodosFilter) {
                console.log('tSto wM updatefilter: ', filter);
                patchState(store, {filter});
            }
        })
    ),

    withComputed((state) => ({
        filteredTodos: computed(() => {
            const todos = state.todos();

            switch(state.filter()) {
                case 'all': 
                // console.log('tSt wC filteredTods.  all: ', todos);
                    return todos;

                case 'completed':
                    const completedTodos = todos.filter(todo => todo.completed);
                    // console.log('tSt wC completed: ', completedTodos);
                    return completedTodos;
                    // return todos.filter(todo => todo.completed);
                    
                case 'pending':
                    const pendingTodos = todos.filter(todo => !todo.completed);
                    // console.log('tSt wCpending: ', pendingTodos);
                    return pendingTodos;
                    // return todos.filter(todo => !todo.completed);

                default:
                    return todos;
            }
        })
    })),
);