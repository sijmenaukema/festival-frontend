import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {MusicSetService} from "../service-music-set/music-set.service";
import {DiscJockeyService} from "../service-disc-jockey/disc-jockey.service";
import {DiscJockey} from "../model/disc-jockey";

@Component({
  selector: 'app-disc-jockey',
  templateUrl: './disc-jockey.component.html',
  styleUrls: ['./disc-jockey.component.css']
})
export class DiscJockeyComponent implements OnInit {

  discJockeys: DiscJockey[] = [];
  discJockey: DiscJockey | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private musicSetService: MusicSetService,
              private discJockeyService: DiscJockeyService
  ){}

  ngOnInit(): void {
    this.getDiscJockeys();
  }

  // synchronous
  getDiscJockeys(): void {
    this.discJockeyService.getDiscJockeys()
      .subscribe(discJockeys => this.discJockeys = discJockeys );
  }

  saveArtist(name: string): void {
    this.discJockey = Object.assign(new DiscJockey(name));
    if (this.discJockey) {
      this.discJockeyService.postNewDiscJockey(this.discJockey)
        .subscribe(() => this.getDiscJockeys());
    }
  }

  goBack():void {
    this.location.back();
  }
}
