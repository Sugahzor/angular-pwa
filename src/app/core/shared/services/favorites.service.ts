import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFavorite } from 'src/app/core/shared/models/favorites-model.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly rootUrl = "http://localhost:1337/restaurants";

  constructor(private http: HttpClient) { }

  getFavorites(): Observable<IFavorite[]> {
    //TODO: map response here; investigate why BE array response becomes object
    return this.http.get<IFavorite[]>(this.rootUrl);
  }
}
