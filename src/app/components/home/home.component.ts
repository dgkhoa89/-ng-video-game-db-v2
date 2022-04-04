import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sort : string='metacrit';
  public games: Array<Game>;

  constructor(
    private httpService : HttpService,
    private activatedRoute : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      if(params['game-search']){
        this.searchGames(this.sort,params['game-search']);
      }else{
        this.searchGames(this.sort);
      }
    })
  }

  searchGames(sort : string,search?: string):void{
    this.httpService.getGameList(sort,search).subscribe((gameList : APIResponse<Game>)=>{
      console.log(gameList);
      this.games = gameList.results;   
    })
  }

  openGameDetails(id : string){
    this.router.navigate(['details',id]);
  }
}
