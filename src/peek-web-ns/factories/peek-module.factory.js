"use strict";
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var peek_core_config_service_1 = require("../services/peek-core-config.service");
var PeekModuleFactory = (function () {
    function PeekModuleFactory() {
    }
    Object.defineProperty(PeekModuleFactory, "PlatformModules", {
        /**
         * Provide a cross platform Platform module.
         * For the browser this is the "BrowserModule"
         * For NativeScript this is the "NativeScriptModule"
         */
        get: function () {
            if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
                return [platform_browser_1.BrowserModule];
            }
            else if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
                // NativeScriptModule
                var Mod = require("nativescript-angular")["NativeScriptModule"];
                return [Mod];
            }
            else {
                throw new Error("Unhandled condition " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeekModuleFactory, "FormsModules", {
        /**
         * Provide a cross platform Browser module
         */
        get: function () {
            if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
                return [forms_1.FormsModule];
            }
            else if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
                // NativeScriptFormsModule
                var Mod = require("nativescript-angular")["NativeScriptFormsModule"];
                return [forms_1.FormsModule, Mod];
            }
            else {
                throw new Error("Unhandled condition " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
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
            if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
                return router_1.RouterModule;
            }
            else if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
                var Mod = require("nativescript-angular")["NativeScriptRouterModule"];
                return Mod;
            }
            else {
                throw new Error("Unhandled condition " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
            }
        },
        enumerable: true,
        configurable: true
    });
    return PeekModuleFactory;
}());
exports.PeekModuleFactory = PeekModuleFactory;
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/factories/peek-module.factory.js.map