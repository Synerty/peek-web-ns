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

    import {Component} from "@angular/core";

    @Component({
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


