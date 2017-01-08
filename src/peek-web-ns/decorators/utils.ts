// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html
import {Component} from "@angular/core";
import {PeekCoreConfigService} from "../services/peek-core-config.service";

const _reflect: any = Reflect;

export class DecoratorUtils {
    public static getMetadata(metadata: any = {}, customDecoratorMetadata?: any) {

        if (PeekCoreConfigService.IS_MOBILE_NATIVE()) {
            metadata.templateUrl = metadata.templateNsUrl;
            if (!metadata.templateUrl) {
                throw new Error("tempalteUrl or templateNsUrl is missing");
                // correct template for platform target
                // PeekViewBrokerService.TEMPLATE_URL(metadata);
            }
        }


        return metadata;
    }

    public static annotateComponent(cls: any, metadata: any = {}, customDecoratorMetadata?: any) {
        let annotations = _reflect.getMetadata('annotations', cls) || [];
        annotations.push(new Component(DecoratorUtils.getMetadata(metadata, customDecoratorMetadata)));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    }
}

