import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }


  logIn(data){
   return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
  }

  register(data){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
   }
}
