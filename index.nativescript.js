/**
 * Created by peek on 9/01/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This doesn't work, it's getting compiler=null when it's used from this NPM package.
 * If you copy the module-loader.ns.factory into the project, it works.
 */
var module_loader_ns_factory_1 = require("./src/peek-web-ns/factories/module-loader.ns.factory");
exports.PeekModuleFactoryLoader = module_loader_ns_factory_1.PeekModuleFactoryLoader;
var device_info_ns_service_1 = require("./src/peek-web-ns/services/device-info-ns.service");
exports.DeviceInfoNsService = device_info_ns_service_1.DeviceInfoNsService;
