import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./app.component";
import { TodoService } from "./todo.service";

@NgModule({
    schemas: [ NO_ERRORS_SCHEMA ],

    // Import NativeScript modules
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule // Needed for two-way binding
    ],

    // Components, Directives, Pipes
    declarations: [ AppComponent ],

    // Service Providers
    providers: [ TodoService],

    // Export components, directives and pipes
    exports: [],

    // Startup component
    bootstrap: [ AppComponent ]
})
export class AppModule { }
