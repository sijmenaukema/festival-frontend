import {Component, OnInit} from '@angular/core';
import {MusicSet} from '../model/music-set';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MusicSetService} from "../service-music-set/music-set.service";
import {ReviewService} from "../service-review/review.service"
import {Review} from '../model/review';

@Component({
  selector: 'app-music-set-detail',
  templateUrl: './music-set-detail.component.html',
  styleUrls: ['./music-set-detail.component.css']
})
export class MusicSetDetailComponent implements OnInit{

  musicSet: MusicSet | undefined;
  reviews: Review[] | undefined;
  review: Review | undefined;

  constructor(private route: ActivatedRoute,
              private musicSetService: MusicSetService,
              private reviewService: ReviewService,
              private location: Location
  ){}

  ngOnInit(): void {
    this.getMusicSet();
  }

  getMusicSet(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.musicSetService.getMusicSet(id)
      .subscribe(musicSet => this.musicSet = musicSet);
    this.reviewService.getReviews(id)
      .subscribe(reviews => this.reviews = reviews);
  }

  saveReview(id: number, rating: number, text: string): void {
    this.review = Object.assign(new Review(id, rating, text))
    if(this.review) {
      this.reviewService.postReview(this.review)
        .subscribe( () => this.ngOnInit());
    }
  }

  goBack():void {
    this.location.back();
  }
}
