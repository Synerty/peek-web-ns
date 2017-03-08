"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var peek_core_config_service_1 = require("../services/peek-core-config.service");
// import {NativeScriptModule as NsMod} from "nativescript-angular";
// import {NativeScriptFormsModule as NsFormsMod} from "nativescript-angular/forms";
// let FMod = require("nativescript-angular/forms")["NativeScriptFormsModule"];
var PeekModuleFactory = (function () {
    function PeekModuleFactory() {
    }
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
                var Mod = require("nativescript-angular")["NativeScriptModule"];
                var FMod = require("nativescript-angular/forms")["NativeScriptFormsModule"];
                return [forms_1.FormsModule, Mod, FMod];
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
