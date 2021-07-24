import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private count = 0;
  private spinner$ = new BehaviorSubject<string>('');

  constructor() { }

  getSpinnerObserver(): Observable<string> {
    return this.spinner$.asObservable();
  }

  requestStarted() {
    if (++this.count === 1) {
      this.spinner$.next('start');
      // this.startSpinner();
    }
  }

  requestEnded() {
    if (this.count === 0 || --this.count === 0) {
      this.spinner$.next('stop');
      const pathName = window.location.pathname;
      // if (pathName !== '/auth/login') {
      //   this.stopSpinner();
      // }
    }
  }

  resetSpinner() {
    this.count = 0;
    this.spinner$.next('stop');
    // this.stopSpinner();
  }

  // startSpinner() {
  //   const _spinner: any = document.getElementById('nb-global-spinner');
  //   _spinner.style.display = 'block';
  // }

  // stopSpinner() {
  //   const _spinner: any = document.getElementById('nb-global-spinner');
  //   _spinner.style.display = 'none';
  // }
}
