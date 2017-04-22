import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo.model";
import { TodoService } from "./todo.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    public currentTodo: string = "";
    public todos: Todo[];

    constructor(private service: TodoService) {
    }

    public ngOnInit() {
        this.todos = this.service.getTodos();
    }

    public addTodo() {
        if (this.currentTodo) {
            this.service.addTodo(this.currentTodo);
            this.currentTodo = "";
        }
    }

    public toggleTodo(todo: Todo) {
        this.service.toggleTodo(todo);
    }
}