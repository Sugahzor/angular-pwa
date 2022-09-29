import { IFavorite } from './../core/shared/models/favorites-model.model';
import { Observable } from 'rxjs';
import { FavoritesState } from './../../redux/favorites.state';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { BaseComponent } from '../core/shared/base/base.component';
import { filter, takeUntil } from 'rxjs/operators';
import { FiltersUtil } from '../core/shared/utils/filters.util';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent extends BaseComponent implements OnInit {
  favoritesResponseArray: IFavorite[] = [];
  @Select(FavoritesState.favoritesResponse) favoritesResponse$: Observable<IFavorite[]>;

  constructor() {
    super();
  }
  ngOnInit(): void {
    this.initFavoritesResponse();
  }

  private initFavoritesResponse() {
    this.favoritesResponse$
      .pipe(
        filter((favoritesResponse: IFavorite[]) => FiltersUtil.notNullOrUndefined(favoritesResponse)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(favoritesResponse => {
        //TODO: check why favoritesResponse is an Object, not an Array
        for (const key in favoritesResponse) {
          this.favoritesResponseArray.push(favoritesResponse[key]);
        }
      });
  }


}
