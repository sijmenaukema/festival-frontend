import {Component, OnInit} from '@angular/core';
import {MusicSet} from '../model/music-set';
import {MusicSetService} from '../service-music-set/music-set.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  musicSets: MusicSet[] = [];

  constructor(
    private musicSetService: MusicSetService,
  ){}

  ngOnInit(): void {
    this.getMusicSets();
  }

  getMusicSets(): void {
    this.musicSetService.getMusicSets()
      .subscribe(musicSets => this.musicSets = musicSets.slice(0, 5));
  }
}
