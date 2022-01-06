# Tutorial

```
# Logs
:::::::: instalar angular-cli v.12
> npm i -g @angular/cli@12.2.0

:::::::: carpeta padre
> mkdir mkdir mfe-module-federation-ng12
> cd mkdir mfe-module-federation-ng12

:::::::: crear los proyectos:

> ng new -s -t -S --minimal --routing --style css shell
> ng new -s -t -S --minimal --routing --style css mfe1

-s: inline style
-t: inline template
-S: skip tests

:::::::: crear el pkg core:
> ng new core-pkg --create-application=false
> cd core-pkg
> ng generate library MfeCoreSample
> cd ..

:::::::: instalar module federation v.12
> cd shell
> ng add @angular-architects/module-federation@12.0.0 --project shell --port 3000
> cd ..
> cd mf1
> ng add @angular-architects/module-federation@12.0.0 --project mfe1 --port 4000
> ..

:::::: crear el modulo a exponer en el microfrontend
> cd mf1
> ng g m --routing --project mfe1 mfeone

:::::::: configurar module-federation
mfe1\webpack.config.js
...
// For remotes (please adjust)
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
            './Component': './/src/app/mfeone/mfeone.component.ts',
        },
...

shell\webpack.config.js
...
// For hosts (please adjust)
        remotes: {
            "mfe1": "http://localhost:4000/remoteEntry.js",

        },
...

:::::: creamos un componente dentro del microfrontend remoto
> cd mfe1
> ng g component --skip-tests -s -t mfeone/hello

:::::: configuramos las rutas
mfe1\src\app\mfeone\mfeone-routing.module.ts
...
const routes: Routes = [
  {
    path: "",
    component: HelloComponent,
  }
];
...

shell\src\app\app-routing.module.ts
...
{
    path: 'remote',
    loadChildren: () => loadRemoteModule({
        remoteEntry: 'http://localhost:4000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then(m => { return m.MfeoneModule }),
  },
...

:::::: listo
con esto ya debería correr el microfrontend
> cd shell && ng serve -o
> cd mfe1 && ng serve
	Navegar a la ruta /remote para ver el microfrontend cargado.

:::::::::::::::::: Pasos adicionales

:::::: Para correr el mfe1 de forma aislada también
mfe1\src\app\app-routing.module.ts
...
{
    path: "",
    loadChildren: () => import('./mfeone/mfeone.module').then(m => m.MfeoneModule),
    pathMatch: 'full',
  }
...

:::::: añadir más componentes en shell
> ng g component --skip-tests -s -t nav
> ng g component --skip-tests -s -t home
shell\src\app\home\home.component.ts
...
@Component({
  selector: 'app-home',
  template: `
    <h3>Welcome to MFE app with Module Federation</h3>
    <app-nav></app-nav>
  `,
  styles: [
  ]
})
...

shell\src\app\app-routing.module.ts
...
{
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
...
```
