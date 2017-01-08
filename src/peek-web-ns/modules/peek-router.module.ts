import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PeekCoreConfigService} from "../services/peek-core-config.service";


export class PeekRouterModule {
    /**
     * Provides the forRoot functions based on the platform being used.
     */
    static forRoot(routes: any, config?: any): ModuleWithProviders {
        if (PeekCoreConfigService.IS_WEB()) {
            return RouterModule.forRoot(routes, config);

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            let Mod = require("nativescript-angular")["NativeScriptRouterModule"];
            return Mod.forRoot(routes, config);
        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }

    /**
     * Provides the forChild functions based on the platform being used.
     */
    static forChild(routes: any): ModuleWithProviders {
        if (PeekCoreConfigService.IS_WEB()) {
            return RouterModule.forChild(routes);

        } else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            let Mod = require("nativescript-angular")["NativeScriptRouterModule"];
            return Mod.forChild(routes);

        } else {
            throw new Error(`Unhandled condition ${PeekCoreConfigService.PLATFORM_TARGET}`);
        }
    }
}

