import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class StreetartService {
  
  private apiUrl = environment.apiUrl + '/streetart';
  
    constructor(private httpClient: HttpClient) {}

    getAll(): Promise<any> {
      const options = {
        withCredentials: true
      };
      return this.httpClient.get(`${this.apiUrl}`, options)
        .toPromise();

    }
    create(data): Promise<any> {
      const options = {
        withCredentials: true
      };
      return this.httpClient.post(`${this.apiUrl}`, data, options)
        .toPromise();
    }
    getStreetart(id:Identifiers): Promise<any> {
      const options = {
        withCredentials: true
      };
      return this.httpClient.post('${this.apiUrl}', id, options)
        .toPromise();
      
 
    }
  }

  