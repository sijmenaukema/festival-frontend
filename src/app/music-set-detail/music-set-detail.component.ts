import {Component, OnInit} from '@angular/core';
import {MusicSet} from '../model/music-set';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MusicSetService} from "../service-music-set/music-set.service";
import {ReviewService} from "../service-review/review.service"
import {Review} from '../model/review';
import {DiscJockeyService} from "../service-disc-jockey/disc-jockey.service";
import {DiscJockey} from "../model/disc-jockey";

@Component({
  selector: 'app-music-set-detail',
  templateUrl: './music-set-detail.component.html',
  styleUrls: ['./music-set-detail.component.css']
})
export class MusicSetDetailComponent implements OnInit{

  musicSet: MusicSet | undefined;
  reviews: Review[] | undefined;
  review: Review | undefined;
  discJockey: DiscJockey | undefined;

  constructor(private route: ActivatedRoute,
              private musicSetService: MusicSetService,
              private reviewService: ReviewService,
              private discJockeyService: DiscJockeyService,
              private location: Location
  ){}

  ngOnInit(): void {
    this.getMusicSet();
  }

  getMusicSet(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.musicSetService.getMusicSet(id)
      .subscribe(musicSet => this.musicSet = musicSet);
    this.reviewService.getReviewsForMusicSet(id)
      .subscribe(reviews => this.reviews = reviews);
  }

  saveReview(musicSetId: string, rating: number, text: string): void {
    this.review = Object.assign(new Review(musicSetId, rating, text))
    if(this.review) {
      this.reviewService.postReview(this.review)
        .subscribe( () => this.ngOnInit());
    }
  }

  remove(id: string): void {
    this.musicSetService.removeMusicSet(id)
      .subscribe( ()=> this.goBack() );
  }

  goBack():void {
    this.location.back();
  }
}
