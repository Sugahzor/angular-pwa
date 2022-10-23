import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesService } from './services/favorites.service';
import { MaterialModule } from '../material/material.module';
import { UpdateService } from './services/sw-update.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports: [MaterialModule],
  providers: [FavoritesService, UpdateService]
})

export class SharedModule { }
