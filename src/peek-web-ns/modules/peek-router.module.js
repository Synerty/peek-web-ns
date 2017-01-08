import { RouterModule } from "@angular/router";
import { PeekCoreConfigService } from "../services/peek-core-config.service";
var PeekRouterModule = (function () {
    function PeekRouterModule() {
    }
    /**
     * Provides the forRoot functions based on the platform being used.
     */
    PeekRouterModule.forRoot = function (routes, config) {
        if (PeekCoreConfigService.IS_WEB()) {
            return RouterModule.forRoot(routes, config);
        }
        else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            var Mod = require("nativescript-angular")["NativeScriptRouterModule"];
            return Mod.forRoot(routes, config);
        }
        else {
            throw new Error("Unhandled condition " + PeekCoreConfigService.PLATFORM_TARGET);
        }
    };
    /**
     * Provides the forChild functions based on the platform being used.
     */
    PeekRouterModule.forChild = function (routes) {
        if (PeekCoreConfigService.IS_WEB()) {
            return RouterModule.forChild(routes);
        }
        else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            var Mod = require("nativescript-angular")["NativeScriptRouterModule"];
            return Mod.forChild(routes);
        }
        else {
            throw new Error("Unhandled condition " + PeekCoreConfigService.PLATFORM_TARGET);
        }
    };
    return PeekRouterModule;
}());
export { PeekRouterModule };
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/modules/peek-router.module.js.map