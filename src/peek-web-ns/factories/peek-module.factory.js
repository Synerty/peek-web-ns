import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { PeekCoreConfigService } from "../services/peek-core-config.service";
var PeekModuleFactory = (function () {
    function PeekModuleFactory() {
    }
    Object.defineProperty(PeekModuleFactory, "PlatformModule", {
        /**
         * Provide a cross platform Platform module.
         * For the browser this is the "BrowserModule"
         * For NativeScript this is the "NativeScriptModule"
         */
        get: function () {
            if (PeekCoreConfigService.IS_WEB()) {
                return BrowserModule;
            }
            else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
                return require("nativescript-angular")["NativeScriptModule"];
            }
            else {
                throw new Error("Unhandled condition " + PeekCoreConfigService.PLATFORM_TARGET);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeekModuleFactory, "FormsModule", {
        /**
         * Provide a cross platform Browser module
         */
        get: function () {
            if (PeekCoreConfigService.IS_WEB()) {
                return FormsModule;
            }
            else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
                return require("nativescript-angular")["NativeScriptFormsModule"];
            }
            else {
                throw new Error("Unhandled condition " + PeekCoreConfigService.PLATFORM_TARGET);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeekModuleFactory, "RouterModule", {
        /**
         * Provide a cross platform Router module
         */
        get: function () {
            if (PeekCoreConfigService.IS_WEB()) {
                return RouterModule;
            }
            else if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
                return require("nativescript-angular")["NativeScriptRouterModule"];
            }
            else {
                throw new Error("Unhandled condition " + PeekCoreConfigService.PLATFORM_TARGET);
            }
        },
        enumerable: true,
        configurable: true
    });
    return PeekModuleFactory;
}());
export { PeekModuleFactory };
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/factories/peek-module.factory.js.map