import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  public get(){
    return this.http.get('http://localhost:3000/order/');
  }

  public details(id){
    return this.http.get('http://localhost:3000/order/' + id);
  }

}
