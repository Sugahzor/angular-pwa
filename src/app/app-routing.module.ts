import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [{
  path: '',
  component: AppWrapperComponent,
  children: [
    {
      path: 'favorites', component: FavoritesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
