import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";
import { MusicSet } from "../interface/music-set";
import { MUSICSET } from "../interface/mock-music-set";

@Injectable({
  providedIn: 'root'
})
export class MusicSetService {

  constructor() { }

  getMusicSet(): Observable<MusicSet[]> {
    const musicSet = of(MUSICSET)
    return musicSet;
  }
}
