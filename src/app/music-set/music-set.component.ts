import {Component, OnInit} from '@angular/core';
import {MusicSet} from '../interface/music-set';
import {MUSICSET} from "../interface/mock-music-set";
import {MusicSetService} from "../service/music-set.service";

@Component({
  selector: 'app-music-set',
  templateUrl: './music-set.component.html',
  styleUrls: ['./music-set.component.css']
})
export class MusicSetComponent implements OnInit{

  musicSets: MusicSet[] = [];
  selectedMusicSet? : MusicSet;

  constructor(private musicSetService: MusicSetService){ }

  ngOnInit(): void {
    this.getMusicSet();
  }

  // synchronous
  getMusicSet(): void {
    this.musicSetService.getMusicSet()
      .subscribe(musiscSets => this.musicSets = musiscSets );
  }

  onSelect(musicSet: MusicSet) : void {
    this.selectedMusicSet = musicSet;
  }
}
