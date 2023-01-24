export class Review {
  id : string;
  rating: number ;
  text: string;

  constructor(id: string, rating: number , text: string) {
    this.id = id;
    this.rating = rating;
    this.text = text;
  }
}
