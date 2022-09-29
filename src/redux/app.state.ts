import { FavoritesState } from './favorites.state';
import { Selector, State } from "@ngxs/store";
import { Injectable } from "@angular/core";


export interface AppStateModel {
  lang: string;
}
@State<AppStateModel>({
  name: 'app',
  defaults: {
    lang: 'RO'
  }
})
@Injectable()
export class AppState {

  @Selector()
  static getLang(state: AppStateModel): string {
    return state.lang;
  }

}

export const appStates = [
  AppState,
  FavoritesState
];
