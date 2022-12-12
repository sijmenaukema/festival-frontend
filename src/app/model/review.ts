export class Review {
  id : number;
  rating: number ;
  text: string;

  constructor(id: number, rating: number , text: string) {
    this.id = id;
    this.rating = rating;
    this.text = text;
  }
}
