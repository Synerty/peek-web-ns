import {FormsModule} from "@angular/forms";


import {NativeScriptModule, NativeScriptRouterModule} from "nativescript-angular";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {TNSFontIconModule} from "nativescript-ngx-fonticon";

export class PeekModuleFactory {


    /**
     * Provide a cross platform Browser module
     */
    static readonly FormsModules = [
        FormsModule, NativeScriptModule, NativeScriptFormsModule,
        TNSFontIconModule
    ];

    /**
     * Provide a cross platform Router module
     */
    static readonly RouterModule = NativeScriptRouterModule;

}

