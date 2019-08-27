import { Injectable } from '@angular/core';
import { UserId } from '../user-id';
// import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  users:UserId;
  repos:any;

  constructor( private http:HttpClient) { }
    searchy(searchTerm: string){
      let promise = new Promise((resolve, reject)=>{
         this.http.get('url').toPromise().then(
           (results)=>{
             
           }
         )
      })
    }
}
