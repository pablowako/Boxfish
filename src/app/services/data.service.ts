import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private httpClient : HttpClient) {}
  
  public getIP() : any{
    return this.httpClient.get("http://api.ipify.org/?format=json");
  }
}
