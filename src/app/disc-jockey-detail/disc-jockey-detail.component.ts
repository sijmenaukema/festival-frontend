import {Component} from '@angular/core';
import {MusicSet} from "../model/music-set";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {DiscJockeyService} from "../service-disc-jockey/disc-jockey.service";
import {DiscJockey} from "../model/disc-jockey";
import {MusicSetService} from "../service-music-set/music-set.service";

@Component({
  selector: 'app-disc-jockey-detail',
  templateUrl: './disc-jockey-detail.component.html',
  styleUrls: ['./disc-jockey-detail.component.css']
})
export class DiscJockeyDetailComponent {
  musicSet: MusicSet | undefined;
  musicSets: MusicSet[] = [];
  discJockey: DiscJockey | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private discJockeyService: DiscJockeyService,
              private musicSetService: MusicSetService
              ) {}

  ngOnInit(): void {
    this.getDiscJockeyMusicSets()
  }

  getDiscJockeyMusicSets(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.discJockeyService.getDiscJockey(id)
      .subscribe(discJockey => this.discJockey = discJockey);
    this.musicSetService.getMusicSetsByDiscJockeyId(id)
      .subscribe(musicSets => this.musicSets = musicSets);
  }

  remove(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.discJockeyService.removeDiscJockey(id)
      .subscribe( ()=> this.goBack() );
  }

  saveMusicSet(title: string, genre: string): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.musicSet = Object.assign(new MusicSet(id, title, genre));
    if(this.musicSet) {
      console.log(this.musicSet);
      this.musicSetService.postMusicSet(this.musicSet)
        .subscribe( () => this.ngOnInit());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
