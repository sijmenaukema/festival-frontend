import {Review} from "./review";

export class MusicSet {
  id : number;
  title: string;
  genre: string;
  review: Review | undefined;


  constructor(id: number, title: string, genre: string) {
    this.id = id;
    this.title = title;
    this.genre = genre;
  }
}
