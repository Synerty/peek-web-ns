// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
import {PeekCoreConfigService} from "./peek-core-config.service";

export class PeekViewBrokerService {

    private static GET_PATH_FROM_MODULE_PATH(moduleFilename): string {

        // Get the module path from the components module path
        // Strip the "/data/data/org.../files" from the path, look for "app"
        // We should end up with everything after ../app/
        let path = '';
        let appFound = false;
        for (let dirName of moduleFilename.split('/')) {
            if (dirName == 'app') {
                appFound = true;
                continue
            }

            if (!appFound)
                continue;

            path += (path ? '/' : '') + dirName;
        }

        // Strip off the component name so we're left with just the path
        path = path.slice(0, path.length - path.split('/').pop().length);

        return path;
    }

    public static CONFIGURE_TEMPLATE_URL(metadata: any = {}) {

        // We don't do anything for web, webpack takes care of this
        if (PeekCoreConfigService.IS_WEB()) {
            // Webpack ts-loader?? turns templateUrl:... into template: require(...
            return;
        }

        if (metadata.templateUrl == null) {
            throw new Error('templateUrl is missing,' +
                ' it must = the web html file, ending in ".web.html" ');
        }

        if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {

            if (metadata.moduleFilename == null) {
                throw new Error('moduleFilename is missing,' +
                    ' it must = module.filename,' +
                    ' if it is, then this is not compiled by NativeScript');
            }

            let path = PeekViewBrokerService.GET_PATH_FROM_MODULE_PATH(metadata.moduleFilename);

            // Add on the html file name
            path += metadata.templateUrl.replace(".web.html", ".ns.html");

            metadata.templateUrl = path;

            return; // State handled
        }

        throw new Error("Unhandled platform " + PeekCoreConfigService.PLATFORM_TARGET);
    }
}
