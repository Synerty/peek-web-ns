// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
import {DecoratorUtils} from "./utils";

export function PeekComponent(metadata: any = {}) {
    return function (cls: any) {
        return DecoratorUtils.annotateComponent(cls, metadata);
    };
}