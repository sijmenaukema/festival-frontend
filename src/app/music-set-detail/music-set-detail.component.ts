import {Component, Input} from '@angular/core';
import { MusicSet } from '../music-set';

@Component({
  selector: 'app-music-set-detail',
  templateUrl: './music-set-detail.component.html',
  styleUrls: ['./music-set-detail.component.css']
})
export class MusicSetDetailComponent {

  @Input() musicSet?: MusicSet;

  constructor(){ }

  ngOnInit(): void {}
}
