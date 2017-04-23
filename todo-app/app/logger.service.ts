import { Injectable } from "@angular/core";

@Injectable()
export class Logger {
    static counter: number = 0;

    private id: number;
    constructor() {
        this.id = Logger.counter++;
    }

    log(msg: string) {
        console.log(`[${this.id}] - ${msg}`);
    }
}