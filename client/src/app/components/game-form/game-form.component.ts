import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styles: [],
})
export class GameFormComponent implements OnInit {
  // @HostBinding('class') classes = 'row';

  public game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date(),
  };

  public edit: boolean = false;

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.gamesService.getGame(params.id).subscribe(
        (res) => {
          console.log(res);
          this.game = res;
          this.edit = true;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  public updateGame(): void {
    delete this.game.created_at;
    this.gamesService.updateGame(this.game.id || 0, this.game).subscribe(
      (resp) => {
        console.log(resp);
        this.router.navigate(['/games']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public saveNewGame(): void {
    delete this.game.created_at;
    delete this.game.id;

    this.gamesService.saveGame(this.game).subscribe(
      (res) => {
        this.game.title = '';
        this.game.description = '';
        this.game.image = '';
        this.router.navigate(['/games']);
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
