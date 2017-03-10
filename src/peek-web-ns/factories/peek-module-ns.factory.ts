import {FormsModule} from "@angular/forms";


let NsMod = require("nativescript-angular")["NativeScriptModule"];
let NsFormMod = require("nativescript-angular/forms")["NativeScriptFormsModule"];
let NsRouterMod = require("nativescript-angular")["NativeScriptRouterModule"];

export class PeekModuleFactory {


    /**
     * Provide a cross platform Browser module
     */
    static readonly FormsModules = [FormsModule, NsMod, NsFormMod];

    /**
     * Provide a cross platform Router module
     */
    static readonly RouterModule = NsRouterMod;

}

