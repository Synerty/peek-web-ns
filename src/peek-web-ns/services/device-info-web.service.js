"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var device_info_interface_1 = require("./device-info.interface");
var DeviceInfoWebService = (function (_super) {
    __extends(DeviceInfoWebService, _super);
    function DeviceInfoWebService() {
        return _super.call(this) || this;
    }
    DeviceInfoWebService.prototype.uuid = function () {
        // We don't need a real good way of getting the UUID, Peek just assigns it a token
        var browser = navigator.userAgent.substr(0, navigator.userAgent.indexOf(' '));
        return browser + " " + new Date().toString();
    };
    DeviceInfoWebService.prototype.description = function () {
        return navigator.userAgent;
    };
    return DeviceInfoWebService;
}(device_info_interface_1.DeviceInfoService));
DeviceInfoWebService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DeviceInfoWebService);
exports.DeviceInfoWebService = DeviceInfoWebService;
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/services/device-info-web.service.js.map