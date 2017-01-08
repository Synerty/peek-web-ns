// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
import { DecoratorUtils } from "./utils";
export function PeekComponent(metadata) {
    if (metadata === void 0) { metadata = {}; }
    return function (cls) {
        return DecoratorUtils.annotateComponent(cls, metadata);
    };
}
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/decorators/peek-component-ts.js.map