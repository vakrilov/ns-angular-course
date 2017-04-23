import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./app.component";
import { TodoService } from "./todo.service";
import { Logger } from "./logger.service";
import { TodoComponent } from "./todo.component";

@NgModule({
    schemas: [ NO_ERRORS_SCHEMA ],

    // Import NativeScript modules
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule // Needed for two-way binding
    ],

    // Components, Directives, Pipes
    declarations: [ AppComponent, TodoComponent ],

    // Service Providers
    providers: [ TodoService, Logger ],

    // Export components, directives and pipes
    exports: [],

    // Startup component
    bootstrap: [ AppComponent ]
})
export class AppModule { }
