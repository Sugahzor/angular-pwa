import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesService } from './services/favorites.service';

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http);
// }

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [FavoritesService]
})

export class SharedModule { }
