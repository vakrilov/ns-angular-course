import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "./todo.model";
@Component({
    selector: 'td-todo',
    templateUrl: 'todo.component.html'
})
export class TodoComponent {
    @Input() todo: Todo;
    @Output() toggle: EventEmitter<Todo> = new EventEmitter<Todo>();

    constructor() { }
}