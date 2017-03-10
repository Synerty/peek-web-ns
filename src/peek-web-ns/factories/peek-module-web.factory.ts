import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

export class PeekModuleFactory {
    /**
     * Provide a cross platform Browser module
     */
    static readonly FormsModules = [FormsModule];

    /**
     * Provide a cross platform Router module
     */
    static readonly RouterModule = RouterModule;
}

