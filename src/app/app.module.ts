import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicSetComponent } from './music-set/music-set.component';
import { DiscJockeyComponent } from './disc-jockey/disc-jockey.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicSetComponent,
    DiscJockeyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
