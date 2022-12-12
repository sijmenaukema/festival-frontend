import { NgModule } from '@angular/core';
import { MusicSetComponent } from "./music-set/music-set.component";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MusicSetDetailComponent } from "./music-set-detail/music-set-detail.component";
import {DiscJockeyComponent} from "./disc-jockey/disc-jockey.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'musicset', component: MusicSetComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MusicSetDetailComponent },
  { path: 'discjockey', component: DiscJockeyComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
