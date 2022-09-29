import { IFavorite } from "src/app/core/shared/models/favorites-model.model";

export interface FavoritesStateModel {
  favoritesResponse: IFavorite[] | null;
}

export class GetFavorites {
  static readonly type = '[Restaurants API] Get Favorites';
}
