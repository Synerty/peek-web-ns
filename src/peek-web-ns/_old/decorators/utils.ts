// http://angularjs.blogspot.com.au/2016/03/code-reuse-in-angular-2-native-mobile.html

import {Component} from "@angular/core";
import {PeekViewBrokerService} from "../peek-view-broker.service";

const _reflect: any = Reflect;

export class DecoratorUtils {
    public static getMetadata(metadata: any = {}, customDecoratorMetadata?: any) {

        PeekViewBrokerService.CONFIGURE_TEMPLATE_URL(metadata);
        PeekViewBrokerService.CONFIGURE_STYLE_URLS(metadata);
        return metadata;
    }

    public static annotateComponent(cls: any, metadata: any = {}, customDecoratorMetadata?: any) {
        let annotations = _reflect.getMetadata('annotations', cls) || [];
        annotations.push(new Component(DecoratorUtils.getMetadata(metadata, customDecoratorMetadata)));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    }
}

