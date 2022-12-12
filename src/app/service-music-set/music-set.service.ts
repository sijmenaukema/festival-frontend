import {Injectable} from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {MusicSet} from "../model/music-set";
import {MessageService} from "../service-message/message.service";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MusicSetService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private log(message: string) {
    this.messageService.add(`MusicSetService: $(message)`);
  }

  private festivalUrl = 'http://localhost:9090/musicset/';

  getMusicSets(): Observable<MusicSet[]> {
    return this.http.get<MusicSet[]>(this.festivalUrl)
      .pipe(
        tap(_ => this.log('fetched music set array')),
        catchError(this.handleError<MusicSet[]>('getMusicSets',[]))
      )
  }

  getMusicSet(id: number): Observable<MusicSet>{
    const url = `${this.festivalUrl}${id}`;
    return this.http.get<MusicSet>(url).pipe(
      tap(_ => this.log(`fetched music set id=${id}`)),
      catchError(this.handleError<MusicSet>(`getMusicSet id=${id}`))
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
