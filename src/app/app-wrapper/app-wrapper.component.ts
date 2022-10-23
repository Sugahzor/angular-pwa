import { UpdateService } from './../core/shared/services/sw-update.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetFavorites } from 'src/redux/favorites.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss']
})
export class AppWrapperComponent implements OnInit {

  constructor(private store: Store, private swUpdateService: UpdateService, private router: Router) {
    // this.swUpdateService.checkForUpdates();
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.store.dispatch(new GetFavorites());
  }

}
