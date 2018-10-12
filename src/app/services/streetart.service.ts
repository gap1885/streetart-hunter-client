import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreetartService {
 
    private baseUrl = `${environment.apiUrl}+/streetart`;
  constructor() { }
}
