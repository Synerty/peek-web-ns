// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
"use strict";
var core_1 = require("@angular/core");
var peek_view_broker_service_1 = require("../services/peek-view-broker.service");
var _reflect = Reflect;
var DecoratorUtils = (function () {
    function DecoratorUtils() {
    }
    DecoratorUtils.getMetadata = function (metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        peek_view_broker_service_1.PeekViewBrokerService.CONFIGURE_TEMPLATE_URL(metadata);
        peek_view_broker_service_1.PeekViewBrokerService.CONFIGURE_STYLE_URLS(metadata);
        return metadata;
    };
    DecoratorUtils.annotateComponent = function (cls, metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        var annotations = _reflect.getMetadata('annotations', cls) || [];
        annotations.push(new core_1.Component(DecoratorUtils.getMetadata(metadata, customDecoratorMetadata)));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    };
    return DecoratorUtils;
}());
exports.DecoratorUtils = DecoratorUtils;
//# sourceMappingURL=utils.js.map