import {Injectable} from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {MessageService} from "../service-message/message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {DiscJockey} from "../model/disc-jockey";
import {apiUrl} from "../../api.url";
import {MusicSet} from "../model/music-set";

@Injectable({
  providedIn: 'root'
})
export class DiscJockeyService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private log(message: string) {
    this.messageService.add(`DiscJockeyService: $(message)`);
  }

  private discJockeyUrl = `${apiUrl}/discjockey/`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getDiscJockeys(): Observable<DiscJockey[]> {
    return this.http.get<DiscJockey[]>(this.discJockeyUrl)
      .pipe(
        tap(_ => this.log('fetched disc jockey array')),
        catchError(this.handleError<DiscJockey[]>('getDiscJockeys',[]))
      )
  }

  getDiscJockey(id: string): Observable<DiscJockey>{
    const url = `${this.discJockeyUrl}{id}?id=${id}`;
    return this.http.get<DiscJockey>(url)
      .pipe(
      tap(_ => this.log(`fetched disc jockey id=${id}`)),
      catchError(this.handleError<DiscJockey>(`getDiscJockey id=${id}`))
    );
  }

  postNewDiscJockey(discJockey: DiscJockey): Observable<any>{
    return this.http.post(this.discJockeyUrl, discJockey, this.httpOptions)
      .pipe(
      tap(_ => this.log(`post new disc jockey id=${discJockey.name}`)),
      catchError(this.handleError<any>('post review'))
    );
  }

  removeDiscJockey(id: string): Observable<any>{
    const url = `${this.discJockeyUrl}{id}?id=${id}`;
    return this.http.delete(url)
      .pipe(
        tap(_ => this.log(`delete disc jockey id=${id}`)),
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
