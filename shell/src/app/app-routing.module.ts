import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'remote',
    loadChildren: () => loadRemoteModule({
        remoteEntry: 'http://localhost:4000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then(m => { return m.MfeoneModule }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
