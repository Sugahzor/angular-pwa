import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly rootUrl = "http://localhost:1337/restaurants";

  constructor(private http: HttpClient) { }

  getFavorites(): Observable<any> {
    return this.http.get<any>(this.rootUrl)
      .pipe(
        tap((response: any) => console.log(response, "favorite restaurants"))
      );
  }
}
