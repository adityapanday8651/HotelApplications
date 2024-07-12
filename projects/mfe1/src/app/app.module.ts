import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // Define microfrontend routes here
      { path: '', component: AppComponent }
    ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
