"use strict";
// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
var utils_1 = require("./utils");
function PeekComponent(metadata) {
    if (metadata === void 0) { metadata = {}; }
    return function (cls) {
        return utils_1.DecoratorUtils.annotateComponent(cls, metadata);
    };
}
exports.PeekComponent = PeekComponent;
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/decorators/peek-component-ts.js.map