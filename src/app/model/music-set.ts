import {Review} from "./review";

export class MusicSet {
  id : string;
  title: string;
  genre: string;
  review: Review | undefined;


  constructor(id: string, title: string, genre: string) {
    this.id = id;
    this.title = title;
    this.genre = genre;
  }
}
