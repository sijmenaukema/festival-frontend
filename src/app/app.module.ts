import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicSetComponent } from './music-set/music-set.component';
import { DiscJockeyComponent } from './disc-jockey/disc-jockey.component';
import { FormsModule } from "@angular/forms";
import { MusicSetDetailComponent } from './music-set-detail/music-set-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MusicSetComponent,
    DiscJockeyComponent,
    MusicSetDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
