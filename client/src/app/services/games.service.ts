import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GamesService {
  public API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getGames(): Observable<Game> {
    return this.http.get(`${this.API_URL}/games`);
  }
  public getGame(id: string): Observable<Game> {
    return this.http.get(`${this.API_URL}/games/${id}`);
  }
  public saveGame(game: Game): Observable<Game> {
    return this.http.post(`${this.API_URL}/games/`, game);
  }

  public deleteGame(id: string): Observable<Game> {
    return this.http.delete(`${this.API_URL}/games/${id}`);
  }
  public updateGame(id: string | number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URL}/games/${id}`, updatedGame);
  }
}
