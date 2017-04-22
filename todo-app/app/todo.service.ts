import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";

@Injectable()
export class TodoService {
    private todos: Todo[] = [
        { text: "Learn angular", completed: false },
        { text: "Create mobile app", completed: false }
    ];

    public getTodos(): Todo[] {
        return this.todos;
    }

    public addTodo(text: string) {
        this.todos.push({ text: text, completed: false });
    }

    public deleteTodo(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    public toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
    }
}