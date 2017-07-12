import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  MenuBarComponent,
  LandingSectionComponent,
  AboutSectionComponent,
  PageFooterComponent,
  PodcastsSectionComponent
} from './components';

import { PodcastService } from './services'

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    LandingSectionComponent,
    AboutSectionComponent,
    PageFooterComponent,
    PodcastsSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PodcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
