import { NgModule } from '@angular/core';
import { MusicSetComponent } from "./music-set/music-set.component";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MusicSetDetailComponent } from "./music-set-detail/music-set-detail.component";
import { DiscJockeyComponent } from "./disc-jockey/disc-jockey.component";
import { DiscJockeyDetailComponent } from "./disc-jockey-detail/disc-jockey-detail.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'musicset', component: MusicSetComponent },
  { path: 'musicsetdetail/:id', component: MusicSetDetailComponent },
  { path: 'discjockey', component: DiscJockeyComponent },
  { path: 'discjockeydetail/:id', component: DiscJockeyDetailComponent },
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
