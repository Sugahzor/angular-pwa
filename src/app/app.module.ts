import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './core/shared/shared.module';
import { AppComponent } from './app.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { appStates } from 'src/redux/app.state';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWrapperComponent,
    HeaderComponent,
    FooterComponent,
    FavoritesComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(appStates),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
