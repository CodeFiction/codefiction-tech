import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LandingSectionComponent } from './Components/landing-section/landing-section.component';
import { AboutSectionComponent } from './Components/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    LandingSectionComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
