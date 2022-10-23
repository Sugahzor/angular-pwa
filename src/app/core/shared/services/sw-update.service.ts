import { Injectable } from "@angular/core";
import { SwUpdate, VersionReadyEvent } from "@angular/service-worker";
import { interval } from "rxjs/internal/observable/interval";
import { filter, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(public swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      interval(6 * 60 * 60).subscribe(() => swUpdate.checkForUpdate()
        .then(() => console.log('checking for updates')));
    }
  }

  public checkForUpdates(): void {
    //TODO: refactor as suggested
    this.swUpdate.available.subscribe(event => this.promptUser());


    // const updatesAvailable = this.swUpdate.versionUpdates.pipe(
    //   filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
    //   map((evt: VersionReadyEvent) => this.promptUser()));
    // if (updatesAvailable) {
    //   // this.promptUser();
    // }
  }

  private promptUser(): void {
    console.log('updating to new version - commented due to repeated reloads');
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }
}
