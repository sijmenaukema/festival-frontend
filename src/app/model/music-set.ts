import {Review} from "./review";

export class MusicSet {
  id? : string | undefined;
  discJockeyId: string;
  title: string;
  genre: string;
  review: Review | undefined;

  constructor(discJockeyId: string, title: string, genre: string,) {
    this.discJockeyId = discJockeyId;
    this.title = title;
    this.genre = genre;
  }
}
