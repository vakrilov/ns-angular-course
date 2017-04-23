import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "./todo.model";
import { Logger } from "./logger.service";

@Component({
    selector: 'td-todo',
    templateUrl: 'todo.component.html',
    providers: [ Logger ]
})
export class TodoComponent {
    @Input() todo: Todo;
    @Input() shouldMotivate: boolean;
    @Output() toggle: EventEmitter<Todo> = new EventEmitter<Todo>();

    constructor(private logger: Logger) { }

    onTap() {
        this.logger.log(this.todo.text);
        this.toggle.next(this.todo);
    }
}