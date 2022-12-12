import {DiscJockey} from "./disc-jockey";
import {Review} from "./review";

export class MusicSet {
  id : number;
  title: string;
  genre: string;
  discJockey: DiscJockey;
  review: Review;


  constructor(id: number, title: string, genre: string, discJockey: DiscJockey, review: Review) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.discJockey = discJockey;
    this.review = review;
  }
}
