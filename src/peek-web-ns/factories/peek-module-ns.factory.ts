import {FormsModule} from "@angular/forms";


import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptRouterModule} from "nativescript-angular";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {TNSFontIconModule} from "nativescript-ngx-fonticon";
import {Sound} from "./Sound";

// import * as TNSSound from "nativescript-sound";
let TNSSound = require("nativescript-sound");

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
    static createSound(soundFilePath: string): Sound {
        return TNSSound.create('~' + soundFilePath);
    }

}

