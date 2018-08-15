import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SeoService } from '../app/services/seo.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-angular-seo-3' }),
    AppRoutingModule
  ],
  providers: [
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
