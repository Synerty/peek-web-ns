import {ModuleWithProviders} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {PeekCoreConfigService} from "../services/peek-core-config.service";


export class PeekModuleFactory {
    /**
     * Provide a cross platform Platform module.
     * For the browser this is the "BrowserModule"
     * For NativeScript this is the "NativeScriptModule"
     */
    static get PlatformModules(): ModuleWithProviders[] {
        if (PeekCoreConfigService.IS_WEB()) {
            return [(<any>BrowserModule)];

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            // NativeScriptModule
            let Mod = require("nativescript-angular")["NativeScriptModule"];
            return [Mod];

        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }

    /**
     * Provide a cross platform Browser module
     */
    static get FormsModules(): ModuleWithProviders[] {
        if (PeekCoreConfigService.IS_WEB()) {
            return [(<any>FormsModule)];

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            // NativeScriptFormsModule
            let Mod = require("nativescript-angular")["NativeScriptFormsModule"];
            return [(<any>FormsModule), Mod];

        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }

    /**
     * Provide a cross platform Router module
     */
    static get RouterModule(): any {
        if (PeekCoreConfigService.IS_WEB()) {
            return (<any>RouterModule);

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            let Mod = require("nativescript-angular")["NativeScriptRouterModule"];
            return Mod;

        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }

}

