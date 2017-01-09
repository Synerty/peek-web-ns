Peek WEB NS
===========

This is a utility package that enables code reuse between an AngularCLI and
NativeScript + Typescript + Angular2 project.

Usage
-----

Platform Selection
``````````````````

Insert this at the top of your main.ts for your native script application.
This tells the utility that we're compiling for NativeScript

::

    import {PeekCoreConfigService} from "@synerty/peek-web-ns";
    PeekCoreConfigService.PLATFORM_TARGET = PeekCoreConfigService.PLATFORMS.MOBILE_NATIVE;


Component Template Selection
````````````````````````````

Angular CLI can handle templates with no paths, while NativeScript requires a path
relative to app/.

Use this utility to switch the component templates for each platform.
The files required are all in the same directory and named as follows:
- main-home.component.ts
- main-home.component.web.html
- main-home.component.ns.html

Under the hood : When the template is compiled on nativescript, it's using NODE, so we can use
module.filename. We use this to find the relative path to app, then take the templateUrl
add the path and replace .web.html with .ns.html.

::

    import {PeekComponent} from "@synerty/peek-web-ns";

    @PeekComponent({
        selector: "peek-main-home",
        templateUrl: 'main-home.component.web.html',
        moduleFilename : module.filename
    })
    export class MainHomeComponent {
        testMsg: string = "Unified home Update2";

    }

Router Selection
````````````````

Angular CLI and NativeScript require different router modules, this utility helps switch
between them.

You will still need separate main AppModule files.

app.ns.module.ts
::

    @NgModule({
        declarations: [
            AppComponent,
            // declarations
        ],
        bootstrap: [AppComponent],
        imports: [
            NativeScriptModule,
            NativeScriptRouterModule,
            PeekRouterModule.forRoot(staticRoutes), // <-- HERE
            // other imports
        ],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [{
                provide: NgModuleFactoryLoader,
                useClass: PeekModuleFactoryLoader
            },
            // Other providers
        ]
    })
    export class AppNsModule {

    }


app.web.module.ts
::

    @NgModule({
        declarations: [
            AppComponent,
            // declarations
        ],
        imports: [
            RouterModule,
            PeekRouterModule.forRoot(staticRoutes), // <-- HERE
            BrowserModule,
            FormsModule,
            HttpModule,
            // other imports
        ],
        providers: [
            // Other providers
        ],
        bootstrap: [AppRootComponent]
    })
    export class AppWebModule {
    }


Angular CLI
-----------
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

Development server
``````````````````
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Code scaffolding
````````````````
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

Build
`````
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Running unit tests
``````````````````
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Running end-to-end tests
````````````````````````
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

Deploying to Github Pages
`````````````````````````
Run `ng github-pages:deploy` to deploy to Github Pages.


Further help
````````````
To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# peek-web-ns
