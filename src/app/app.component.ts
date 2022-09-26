import { Component } from '@angular/core';
import { FavoritesService } from './core/shared/services/favorites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-PWA';
  constructor(private favoritesService: FavoritesService) {
    this.favoritesService.getFavorites()
      .subscribe();
  }
}
