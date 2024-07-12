import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HeaderComponent } from './components/header/header.component';

// const routes: Routes = [];

const routes: Routes = [
  { 
    path: '', 
    component: HeaderComponent 
  },
  { 
    path: 'mfe1', 
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Module'
    }).then(m => m.AppModule)  // Ensure this points to the correct module
  },
  { 
    path: 'mfe2', 
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Module'
    }).then(m => m.AppModule)  // Ensure this points to the correct module
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
