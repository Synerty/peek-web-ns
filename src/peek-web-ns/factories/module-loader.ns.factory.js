var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Compiler } from "@angular/core";
import { path, knownFolders } from "file-system";
var SEPARATOR = "#";
var PeekModuleFactoryLoader = (function () {
    function PeekModuleFactoryLoader(compiler) {
        this.compiler = compiler;
    }
    PeekModuleFactoryLoader.prototype.load = function (path) {
        var _a = this.splitPath(path), modulePath = _a.modulePath, exportName = _a.exportName;
        var loadedModule = require(modulePath)[exportName];
        if (!loadedModule) {
            throw new Error("Cannot find \"" + exportName + "\" in \"" + modulePath + "\"");
        }
        return this.compiler.compileModuleAsync(loadedModule);
    };
    PeekModuleFactoryLoader.prototype.splitPath = function (path) {
        var _a = path.split(SEPARATOR), modulePath = _a[0], exportName = _a[1];
        modulePath = getAbsolutePath(modulePath);
        if (typeof exportName === "undefined") {
            exportName = "default";
        }
        return { modulePath: modulePath, exportName: exportName };
    };
    return PeekModuleFactoryLoader;
}());
PeekModuleFactoryLoader = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Compiler])
], PeekModuleFactoryLoader);
export { PeekModuleFactoryLoader };
function getAbsolutePath(relativePath) {
    return path.normalize(path.join(knownFolders.currentApp().path, relativePath));
}
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/factories/module-loader.ns.factory.js.map