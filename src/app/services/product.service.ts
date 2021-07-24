import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url$ = new BehaviorSubject<string>(environment.crawUrl);
  private product$ = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) { }

  getUrlObserver(): Observable<string> {
    return this.url$.asObservable();
  }

  getProductObserver(): Observable<string> {
    return this.product$.asObservable();
  }

  setDataProduct(data: any) {
    this.product$.next(data);
  }

  setUrl(url: string) {
    this.url$.next(url);
  }

  getSlideBar(params: any) {
      const url = environment.apiUrl + 'template';
      return this.http.post(url, params);
  }

  getAll(params: any) {
    const url = environment.apiUrl + 'template';
    return this.http.post(url, params);
  }
}
