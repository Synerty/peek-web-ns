// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html

interface IPlatforms {
    WEB: string;
    MOBILE_NATIVE: string;
}

export class PeekCoreConfigService {

    // supported platforms
    public static PLATFORMS: IPlatforms = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_nativescript',
        // TABLET_NATIVE: 'tablet_nativescript',
        // TABLET_NATIVE: 'desktop_electron'
    };

    // current target (default to web)
    public static PLATFORM_TARGET: string = PeekCoreConfigService.PLATFORMS.WEB;

    // convenient platform checks
    public static IS_WEB(): boolean {
        return PeekCoreConfigService.PLATFORM_TARGET === PeekCoreConfigService.PLATFORMS.WEB;
    }

    public static IS_MOBILE_NATIVE(): boolean {
        return PeekCoreConfigService.PLATFORM_TARGET === PeekCoreConfigService.PLATFORMS.MOBILE_NATIVE;
    }
}