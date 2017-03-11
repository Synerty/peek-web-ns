import {FormsModule} from "@angular/forms";


import {NativeScriptModule, NativeScriptRouterModule} from "nativescript-angular";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {TNSFontIconModule} from "nativescript-ngx-fonticon";
import {Sound} from "./Sound";

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

    /**
     * Create a new sound object, that can be played.
     */
    static createSound(soundFilePath:string) :Sound{
        return new Audio(soundFilePath);
    }

}

