import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../core/shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private favoritesService: FavoritesService) {
    this.favoritesService.getFavorites()
      .subscribe();
  }
  ngOnInit(): void {
  }

}
