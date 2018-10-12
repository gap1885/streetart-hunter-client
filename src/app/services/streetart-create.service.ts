import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StreetartCreateService {
  private baseUrl = `${environment.apiUrl}/streetart-create`;

  constructor( private httpClient: HttpClient) { }

  getAll() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(this.baseUrl, options)
      .toPromise();
  }
}