import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicSetComponent } from './music-set/music-set.component';
import { DiscJockeyComponent } from './disc-jockey/disc-jockey.component';
import { FormsModule } from "@angular/forms";
import { MusicSetDetailComponent } from './music-set-detail/music-set-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicSetComponent,
    DiscJockeyComponent,
    MusicSetDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
