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
    static get PlatformModule(): ModuleWithProviders {
        if (PeekCoreConfigService.IS_WEB()) {
            return (<any>BrowserModule);

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            return require("nativescript-angular")["NativeScriptModule"];

        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }

    /**
     * Provide a cross platform Browser module
     */
    static get FormsModule(): ModuleWithProviders {
        if (PeekCoreConfigService.IS_WEB()) {
            return (<any>FormsModule);

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            return require("nativescript-angular")["NativeScriptFormsModule"];

        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }

    /**
     * Provide a cross platform Router module
     */
    static get RouterModule(): RouterModule {
        if (PeekCoreConfigService.IS_WEB()) {
            return (<any>RouterModule);

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            return require("nativescript-angular")["NativeScriptRouterModule"];

        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }

}

