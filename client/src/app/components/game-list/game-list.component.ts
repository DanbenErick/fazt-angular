import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: [],
})
export class GameListComponent implements OnInit {
  constructor(private gamesService: GamesService, private router: Router) {}

  public games: Game[] = []

  public getGames(): void {
    this.gamesService.getGames().subscribe(
      (res: any) => {
        this.games = res
      },
      (err) => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
    this.getGames()
  }

  public editGame(id: any) {
    this.router.navigate(['games/edit/' + id])
    console.log(id);

  }

  public deleteGame(id: any) {
    this.gamesService.deleteGame(id).subscribe(
      res => {
        this.getGames()
        console.log(res);
      },
      err => {
        console.log(err);

      }
    )
  }
}
