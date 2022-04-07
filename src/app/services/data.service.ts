import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  headers : any = new HttpHeaders()

  constructor(private httpClient : HttpClient) {}
  
  public getIP() : any{

    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.get("http://api.ipify.org/?format=json",{headers: this.headers});
  }
}
