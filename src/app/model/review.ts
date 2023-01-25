export class Review {
  id? : string;
  musicSetId: string;
  rating: number ;
  text: string;

  constructor( musicSetId: string, rating: number, text: string) {
    this.musicSetId = musicSetId;
    this.rating = rating;
    this.text = text;
  }
}
