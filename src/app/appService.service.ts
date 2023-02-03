import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  dataUrl: any =
    'https://gist.githubusercontent.com/dastagirkhan/00a6f6e32425e0944241/raw/33ca4e2b19695b2b93f490848314268ed5519894/gistfile1.json';
  constructor(private http: HttpClient) {}

  getCitiesData() {
    return this.http.get(this.dataUrl);
  }
}
