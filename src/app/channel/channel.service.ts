import { Injectable } from '@angular/core';
import { Userid } from '../user-id';
import { Repositories } from '../repositories';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  userid:Userid;
  repos:Repositories;

  constructor( private http:HttpClient) { }

    searchy(searchTerm: string){

      interface Repos{
        avatar_url: string;
        username: string;
        login:string;
        bio: string;
        repos: number;
        followers: number;
        following: number;
      }

      let searchEndpoint = "";
      let promise = new Promise((resolve, reject)=>{
         this.http.get<Repos>("https://api.github.com/users/"+searchTerm+"?access_token="+environment.APIKEY).toPromise().then(
           (results)=>{
             this.userid = results;
             resolve();
           },
           (error)=>{
             console.log(error);
             reject()
           }
         )
      });
      return promise;
}

reppy(searchTerm: string){
  interface repy{
     name: string;
     description: string;
     html_url: string;
     repos: number;
    created_at: Date;
  }
      let promise = new Promise((resolve, reject)=>{
         this.http.get<repy>("https://api.github.com/users/"+searchTerm+"/repos?access_token="+environment.APIKEY).toPromise().then(
           (results)=>{
             this.repos = results;
            //  console.log(results)
             resolve();
           },
           (error)=>{
             console.log(error);
             reject()
           }
         )
      });
      return promise
    }
  }
