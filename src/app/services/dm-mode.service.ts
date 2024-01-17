import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmModeService {
  private dmMode = new BehaviorSubject<boolean>(false);

  getDmMode() {
    return this.dmMode.asObservable();
  }

  setDmMode(value: boolean) {
    this.dmMode.next(value);
  }
}