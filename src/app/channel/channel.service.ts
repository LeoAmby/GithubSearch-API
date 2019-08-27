import { Injectable } from '@angular/core';
import { UserId } from '../user-id';
// import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  users:UserId;
  repos:any;

  constructor( private http:HttpClient) { }
    searchy(searchTerm: string){
      interface Repos{
         data:[];
      }
      let searchEndpoint = ("https://api.github.com/users/LeoAmby/searchTerm?api_key=c38da819c9c8565733b1383059fd4acad4d64c75")
      let promise = new Promise((resolve, reject)=>{
         this.http.get<Repos>('searchEndpoint+"$q="+searchTerm').toPromise().then(
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
      return promise;
    }
}
