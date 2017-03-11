import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {Angular2FontAwesomeModule} from "angular2-font-awesome/angular2-font-awesome";
import {Sound} from "./Sound";

import * as TNSSound from "nativescript-sound";

export class PeekModuleFactory {
    /**
     * Provide a cross platform Browser module
     */
    static readonly FormsModules = [FormsModule, Angular2FontAwesomeModule];

    /**
     * Provide a cross platform Router module
     */
    static readonly RouterModule = RouterModule;

    /**
     * Create a new sound object, that can be played.
     */
    static createSound(soundFilePath: string): Sound {
        return TNSSound.create('~' + soundFilePath);
    }
}

