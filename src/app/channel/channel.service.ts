import { Injectable } from '@angular/core';
import { UserId } from '../user-id';
// import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { APIKEY } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  users:UserId;
  repos:any;

  constructor( private http:HttpClient) { }
    searchy(searchTerm: string){
      searchEndpoint = "'https://api.github.com/users/LeoAmby?access_token=' + apiKey
      "
      let promise = new Promise((resolve, reject)=>{
         this.http.get('url').toPromise().then(
           (results)=>{
             console.log(results);
             resolve();
           },
           (error)=>{
             console.log(error);
             reject()
           }
         )
      })
    }
}
