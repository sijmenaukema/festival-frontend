import {DiscJockey} from "./disc-jockey";
import {Review} from "./review";

export interface MusicSet {
  id : number;
  title: string;
  genre: string;
  discJockey: DiscJockey;
  review: Review;
}
