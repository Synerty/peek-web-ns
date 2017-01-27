import {Injectable} from "@angular/core";
@Injectable()
export abstract class DeviceInfoService {
    constructor() {

    }

    abstract uuid() :string;

    abstract description() :string;
}