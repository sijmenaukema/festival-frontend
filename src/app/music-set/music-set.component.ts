import {Component, OnInit} from '@angular/core';
import {MusicSet} from '../interface/music-set';
import {MusicSetService} from "../service-music-set/music-set.service";

@Component({
  selector: 'app-music-set',
  templateUrl: './music-set.component.html',
  styleUrls: ['./music-set.component.css']
})
export class MusicSetComponent implements OnInit{
  musicSets: MusicSet[] = [];

  constructor(private musicSetService: MusicSetService){ }

  ngOnInit(): void {
    this.getMusicSets();
  }

  // synchronous
  getMusicSets(): void {
    this.musicSetService.getMusicSets()
      .subscribe(musicSets => this.musicSets = musicSets );
  }
}
