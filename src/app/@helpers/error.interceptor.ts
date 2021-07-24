import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private spinnerService: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
        tap(
            (event) => {
            if (event instanceof HttpResponse) {
              this.spinnerService.requestEnded();
            }
          }),
          catchError(err => {
            this.spinnerService.resetSpinner();
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authenticationService.logout();
                localStorage.clear();
                this.router.navigate(['auth/login']);
                // location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}