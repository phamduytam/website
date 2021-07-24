import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // let currentUser = this.authenticationService.currentUserValue;
        // const currentUser = JSON.parse(localStorage.getItem('auth_app_token'));
        // if (currentUser && currentUser['value']) {
        //     request = request.clone({
        //         setHeaders: {
        //             'Authorization': `Bearer ${currentUser['value']}`
        //         }
        //     });
        // }
        this.spinnerService.requestStarted();
        return next.handle(request);
    }
}