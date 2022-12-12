import {Injectable} from "@angular/core";
import {MessageService} from "../service-message/message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {Review} from "../model/review";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private log(message: string) {
    this.messageService.add(`ReviewService: $(message)`);
  };

  private reviewUrl = 'http://localhost:9091/review/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getReviews(id: number): Observable<Review[]>{
    const url = `${this.reviewUrl}${id}`;
    return this.http.get<Review[]>(url).pipe(
      tap(_ => this.log(`fetched reviews for music set id: ${id}`)),
      catchError(this.handleError<Review[]>(`getReviews id=${id}`))
    );
  }

  postReview(review: Review): Observable<any> {
    return this.http.post(this.reviewUrl, review, this.httpOptions).pipe(
      tap(_ => this.log(`post review music set id=${review.id}`)),
      catchError(this.handleError<any>('post review'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
