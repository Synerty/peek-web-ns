// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
"use strict";
var PeekCoreConfigService = (function () {
    function PeekCoreConfigService() {
    }
    // convenient platform checks
    PeekCoreConfigService.IS_WEB = function () {
        return PeekCoreConfigService.PLATFORM_TARGET === PeekCoreConfigService.PLATFORMS.WEB;
    };
    PeekCoreConfigService.IS_MOBILE_NATIVE = function () {
        return PeekCoreConfigService.PLATFORM_TARGET === PeekCoreConfigService.PLATFORMS.MOBILE_NATIVE;
    };
    return PeekCoreConfigService;
}());
// supported platforms
PeekCoreConfigService.PLATFORMS = {
    WEB: 'web',
    MOBILE_NATIVE: 'mobile_nativescript',
};
// current target (default to web)
PeekCoreConfigService.PLATFORM_TARGET = PeekCoreConfigService.PLATFORMS.WEB;
exports.PeekCoreConfigService = PeekCoreConfigService;
//# sourceMappingURL=peek-core-config.service.js.map