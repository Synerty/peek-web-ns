"use strict";
var router_1 = require("@angular/router");
var peek_core_config_service_1 = require("../services/peek-core-config.service");
var PeekRouterModule = (function () {
    function PeekRouterModule() {
    }
    /**
     * Provides the forRoot functions based on the platform being used.
     */
    PeekRouterModule.forRoot = function (routes, config) {
        if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
            return router_1.RouterModule.forRoot(routes, config);
        }
        else if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            var Mod = require("nativescript-angular")["NativeScriptRouterModule"];
            return Mod.forRoot(routes, config);
        }
        else {
            throw new Error("Unhandled condition " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
        }
    };
    /**
     * Provides the forChild functions based on the platform being used.
     */
    PeekRouterModule.forChild = function (routes) {
        if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
            return router_1.RouterModule.forChild(routes);
        }
        else if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            var Mod = require("nativescript-angular")["NativeScriptRouterModule"];
            return Mod.forChild(routes);
        }
        else {
            throw new Error("Unhandled condition " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
        }
    };
    return PeekRouterModule;
}());
exports.PeekRouterModule = PeekRouterModule;
//# sourceMappingURL=peek-router.module.js.map