import {Injectable} from "@angular/core";
import {DeviceInfoService} from "./device-info.interface";

let device = require("platform")["device"];

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