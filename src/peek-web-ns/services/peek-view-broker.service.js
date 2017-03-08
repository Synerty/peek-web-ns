"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
var peek_core_config_service_1 = require("./peek-core-config.service");
var PeekViewBrokerService = (function () {
    function PeekViewBrokerService() {
    }
    PeekViewBrokerService.GET_PATH_FROM_MODULE_PATH = function (moduleFilename) {
        // Get the module path from the components module path
        // Strip the "/data/data/org.../files" from the path, look for "app"
        // We should end up with everything after ../app/
        var path = '';
        var appFound = false;
        for (var _i = 0, _a = moduleFilename.split('/'); _i < _a.length; _i++) {
            var dirName = _a[_i];
            if (dirName == 'app') {
                appFound = true;
                continue;
            }
            if (!appFound)
                continue;
            path += (path ? '/' : '') + dirName;
        }
        // Strip off the component name so we're left with just the path
        path = path.slice(0, path.length - path.split('/').pop().length);
        return path;
    };
    PeekViewBrokerService.CONFIGURE_TEMPLATE_URL = function (metadata) {
        if (metadata === void 0) { metadata = {}; }
        // We don't do anything for web, webpack takes care of this
        if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
            // Webpack ts-loader?? turns templateUrl:... into template: require(...
            return;
        }
        if (metadata.templateUrl == null) {
            throw new Error('templateUrl is missing,' +
                ' it must = the web html file, ending in ".web.html" ');
        }
        if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            if (metadata.moduleFilename == null) {
                throw new Error('moduleFilename is missing,' +
                    ' it must = module.filename,' +
                    ' if it is, then this is not compiled by NativeScript');
            }
            var path = PeekViewBrokerService.GET_PATH_FROM_MODULE_PATH(metadata.moduleFilename);
            // Add on the html file name
            path += metadata.templateUrl.replace(".web.html", ".ns.html");
            metadata.templateUrl = path;
            return; // State handled
        }
        throw new Error("Unhandled platform " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
    };
    PeekViewBrokerService.CONFIGURE_STYLE_URLS = function (metadata) {
        if (metadata === void 0) { metadata = {}; }
        if (metadata.styleUrls == null || metadata.styleUrls.length == 0) {
            return;
        }
        // We don't do anything for web, webpack takes care of this
        if (peek_core_config_service_1.PeekCoreConfigService.IS_WEB()) {
            return;
        }
        if (metadata.styleUrls.length == null) {
            throw new Error('templateUrl is missing,' +
                ' it must = an array of the web css file, containing in ".web." ');
        }
        if (peek_core_config_service_1.PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            if (metadata.moduleFilename == null) {
                throw new Error('moduleFilename is missing,' +
                    ' it must = module.filename,' +
                    ' if it is, then this is not compiled by NativeScript');
            }
            var newStyleUrls = [];
            for (var _i = 0, _a = metadata.styleUrls; _i < _a.length; _i++) {
                var styleUrl = _a[_i];
                var path = PeekViewBrokerService.GET_PATH_FROM_MODULE_PATH(metadata.moduleFilename);
                // Add on the css file name
                path += styleUrl.replace(".web.", ".ns.");
                newStyleUrls.push(path);
            }
            metadata.styleUrls = newStyleUrls;
            return; // State handled
        }
        throw new Error("Unhandled platform " + peek_core_config_service_1.PeekCoreConfigService.PLATFORM_TARGET);
    };
    return PeekViewBrokerService;
}());
exports.PeekViewBrokerService = PeekViewBrokerService;
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/services/peek-view-broker.service.js.map