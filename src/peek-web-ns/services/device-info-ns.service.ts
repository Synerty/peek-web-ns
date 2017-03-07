import {Injectable} from "@angular/core";
import {DeviceInfoService} from "./device-info.interface";

let device = require("tns-core-modules/platform")["device"];

@Injectable()
export class DeviceInfoNsService extends DeviceInfoService {
    constructor() {
        super();

    }

    uuid(): string {
        return device.uuid;
    }

    description(): string {
        return `${device.manufacturer}, ${device.model}, ${device.osVersion}`;
    }
}