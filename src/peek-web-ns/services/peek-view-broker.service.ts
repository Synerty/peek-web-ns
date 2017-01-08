// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
import {PeekCoreConfigService} from "./peek-core-config.service";

export class PeekViewBrokerService {

    public static TEMPLATE_URL(path: string): string {
        if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            return path.replace(".web.html",".ns.html");
        } else {
            return path.split('/').pop();
        }
    }
}