import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getGameList(ordering :string, search?:string):Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering',ordering)
    if(search){
      params.append('search',search)
    }
    return this.http.get<APIResponse<Game>>(environment.baseUrl + '/games',{params:params});
  }

  getGameById(id: string):Observable<Game>{
    const gameInfoRequest = this.http.get(environment.baseUrl + '/games/' + id)
    const gameTrailerRequest = this.http.get(environment.baseUrl + '/games/' + id + '/movies')
    const gameScreenshotRequest = this.http.get(environment.baseUrl + '/games/' + id + '/screenshots')

    let game = forkJoin({
      gameInfoRequest,
      gameTrailerRequest,
      gameScreenshotRequest
    }).pipe(
      map((resp : any)=>{
        return {
          ...resp['gameInfoRequest'],
          screenshots:resp['gameScreenshotsRequest']?.results,
          trailers: resp['gameTrailerRequest']?.results,
        };
      })
    )
    // console.log(game);
    
    return game;
  }
}
