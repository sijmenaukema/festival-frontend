import {Injectable} from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {MusicSet} from "../model/music-set";
import {MessageService} from "../service-message/message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  private musicSetUrl = 'http://127.0.0.1:9090/musicset/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMusicSets(): Observable<MusicSet[]> {
    return this.http.get<MusicSet[]>(this.musicSetUrl)
      .pipe(
        tap(_ => this.log('fetched music set array')),
        catchError(this.handleError<MusicSet[]>('getMusicSets',[]))
      )
  }

  getMusicSet(id: number): Observable<MusicSet>{
    const url = `${this.musicSetUrl}${id}`;
    return this.http.get<MusicSet>(url).pipe(
      tap(_ => this.log(`fetched music set id=${id}`)),
    catchError(this.handleError<MusicSet>(`getMusicSet id=${id}`))
  );
  }

  getMusicSetsByDiscJockeyId(id: number): Observable<MusicSet[]>{
    const url = `${this.musicSetUrl}discjockeyid/${id}`;
    return this.http.get<MusicSet[]>(url).pipe(
      tap(_ => this.log(`fetched music set id=${id}`)),
      catchError(this.handleError<MusicSet[]>(`getMusicSet id=${id}`))
    );
  }

  postMusicSet(musicSet: MusicSet): Observable<any> {
    return this.http.post(this.musicSetUrl, musicSet, this.httpOptions)
      .pipe(tap(_ => this.log(`post new music set title=${musicSet.title}`)),
      catchError(this.handleError<any>('post musicSet'))
    );
  }

  removeMusicSet(id :number): Observable<any>{
    const url = `${this.musicSetUrl}${id}`;
    return this.http.delete(url)
      .pipe(tap(_ => this.log(`delete music set id=${id}`)),
        catchError(this.handleError<any>('delete musicSet'))
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
