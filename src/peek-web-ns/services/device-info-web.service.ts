import {Injectable} from "@angular/core";
import {DeviceInfoService} from "./device-info.interface";

@Injectable()
export class DeviceInfoWebService extends DeviceInfoService {
    constructor() {
        super();

    }

    uuid(): string {
        // We don't need a real good way of getting the UUID, Peek just assigns it a token
        let browser = navigator.userAgent.substr(0, navigator.userAgent.indexOf(' '));
        return `${browser} ${new Date().toString()}`;
    }

    description(): string {
        return navigator.userAgent;
    }
}