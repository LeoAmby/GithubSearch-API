import { Injectable } from '@angular/core';
import { Userid } from '../user-id';
//import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  userid:Userid;
  repos:any;

  constructor( private http:HttpClient) { }

    searchy(searchTerm: string){

      interface Repos{
         username:string;
         bio:string;
         repositories:number;
      }

      let searchEndpoint = "https://api.github.com/users/"+searchTerm+"?access_token="+environment.APIKEY;
      let promise = new Promise((resolve, reject)=>{
        this.userid =[];
         this.http.get<Repos>(searchEndpoint).toPromise().then(
           (results)=>{
            console.log('readhere');
             this.userid = results;
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
