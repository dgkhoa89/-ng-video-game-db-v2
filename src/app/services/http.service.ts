import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
