import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs/operators';
import { FavoritesStateModel, GetFavorites } from "./favorites.actions";
import { FavoritesService } from 'src/app/core/shared/services/favorites.service';

@State<FavoritesStateModel>({
  name: 'favoritesManagement',
  defaults: {
    favoritesResponse: null
  }
})
@Injectable()
export class FavoritesState {
  constructor(private favoritesService: FavoritesService) { }

  @Selector()
  static favoritesResponse(state: FavoritesStateModel) {
    return state.favoritesResponse;
  }

  @Action(GetFavorites)
  getFavorites(ctx: StateContext<GetFavorites>) {
    return this.favoritesService.getFavorites()
      .pipe(
        tap(response => {
          ctx.patchState({
            favoritesResponse: { ...response }
          });
        })
        //TODO: add error handling
      );
  }
}
