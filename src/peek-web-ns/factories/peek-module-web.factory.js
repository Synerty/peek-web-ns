"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular2_font_awesome_1 = require("angular2-font-awesome/angular2-font-awesome");
var PeekModuleFactory = (function () {
    function PeekModuleFactory() {
    }
    /**
     * Create a new sound object, that can be played.
     */
    PeekModuleFactory.createSound = function (soundFilePath) {
        return new Audio(soundFilePath);
    };
    return PeekModuleFactory;
}());
/**
 * Provide a cross platform Browser module
 */
PeekModuleFactory.FormsModules = [forms_1.FormsModule, angular2_font_awesome_1.Angular2FontAwesomeModule];
/**
 * Provide a cross platform Router module
 */
PeekModuleFactory.RouterModule = router_1.RouterModule;
exports.PeekModuleFactory = PeekModuleFactory;
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/factories/peek-module-web.factory.js.map