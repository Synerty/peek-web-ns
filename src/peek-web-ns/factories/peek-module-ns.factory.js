"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var NsMod = require("nativescript-angular")["NativeScriptModule"];
var NsFormMod = require("nativescript-angular/forms")["NativeScriptFormsModule"];
var NsRouterMod = require("nativescript-angular")["NativeScriptRouterModule"];
var PeekModuleFactory = (function () {
    function PeekModuleFactory() {
    }
    return PeekModuleFactory;
}());
/**
 * Provide a cross platform Browser module
 */
PeekModuleFactory.FormsModules = [forms_1.FormsModule, NsMod, NsFormMod];
/**
 * Provide a cross platform Router module
 */
PeekModuleFactory.RouterModule = NsRouterMod;
exports.PeekModuleFactory = PeekModuleFactory;
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/factories/peek-module-ns.factory.js.map