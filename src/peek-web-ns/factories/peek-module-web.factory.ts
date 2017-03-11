import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

export class PeekModuleFactory {
    /**
     * Provide a cross platform Browser module
     */
    static readonly FormsModules = [FormsModule, Angular2FontAwesomeModule];

    /**
     * Provide a cross platform Router module
     */
    static readonly RouterModule = RouterModule;
}

