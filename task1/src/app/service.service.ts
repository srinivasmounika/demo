import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  constructor(public http:HttpClient) { }

  getdetails(){
    return this.http.get<any>('http://localhost:3000/details')
}



}