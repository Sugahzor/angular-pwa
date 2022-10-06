import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

export const proxiedModules = [
  CommonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [],
  imports: [...proxiedModules],
  exports: [...proxiedModules],
})
export class MaterialModule { }
