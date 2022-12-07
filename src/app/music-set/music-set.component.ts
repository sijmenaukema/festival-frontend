import {Component, OnInit} from '@angular/core';
import {MusicSet} from '../music-set';
import {MUSICSET} from "../mock-music-set";

@Component({
  selector: 'app-music-set',
  templateUrl: './music-set.component.html',
  styleUrls: ['./music-set.component.css']
})
export class MusicSetComponent implements OnInit{

  musicSets = MUSICSET;
  selectedMusicSet? : MusicSet;

  constructor(){ }

  ngOnInit(): void {}

  onSelect(musicSet: MusicSet) : void {
    this.selectedMusicSet = musicSet;
  }
}
