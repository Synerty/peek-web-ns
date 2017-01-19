/**
 * Created by peek on 9/01/17.
 */

/*
 * This doesn't work, it's getting compiler=null when it's used from this NPM package.
 * If you copy the module-loader.ns.factory into the project, it works.
 */
export {PeekModuleFactoryLoader} from "./src/peek-web-ns/factories/module-loader.ns.factory";