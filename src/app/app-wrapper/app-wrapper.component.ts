import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetFavorites } from 'src/redux/favorites.actions';

@Component({
  selector: 'app-app-wrapper',
  templateUrl: './app-wrapper.component.html',
  styleUrls: ['./app-wrapper.component.scss']
})
export class AppWrapperComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetFavorites());
  }

}
