// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
import { PeekCoreConfigService } from "./peek-core-config.service";
var PeekViewBrokerService = (function () {
    function PeekViewBrokerService() {
    }
    PeekViewBrokerService.TEMPLATE_URL = function (path) {
        if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            return path.replace(".web.html", ".ns.html");
        }
        else {
            return path.split('/').pop();
        }
    };
    return PeekViewBrokerService;
}());
export { PeekViewBrokerService };
//# sourceMappingURL=/home/peek/project/peek-web-ns/src/peek-web-ns/services/peek-view-broker.service.js.map