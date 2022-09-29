import { OnDestroy, Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: ''
})
export abstract class BaseComponent implements OnDestroy {

  public unsubscribe$ = new Subject();

  ngOnDestroy() {
    this.completeSubscriptions();
  }

  completeSubscriptions() {
    if (!this.unsubscribe$.isStopped) {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  }
}
