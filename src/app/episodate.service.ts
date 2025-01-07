import { Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, map, switchMap, tap } from 'rxjs';

const SHOWS_URL = "https://www.episodate.com/api/search"


interface Response{
  tv_shows: Show[],
  total  :number,
  page   :number,
  pages  :number,
}

export interface Show  {
  id: number
  name: string;
  country: string;
  status: string;
  start_date: string
}

@Injectable({
  providedIn: 'root'
})
export class EpisodateService {

  newSearch = new BehaviorSubject<string>("")
  private _isLoading = signal(false)
  isLoading = this._isLoading.asReadonly()
  shows = signal(<Show[]>[]);

  constructor(private http: HttpClient) {
    }

  getShows(){
     this.newSearch.pipe(
      tap(q => this._isLoading.set(true)),
      delay(500),
      switchMap((q: string) => this.http.get<Response>(`${SHOWS_URL}?q=${q}&page=1`)),
      map((d: Response) => d.tv_shows)).subscribe(
        (s => {
          this.shows.set(s)
          this._isLoading.set(false)
        }))
  }

}
