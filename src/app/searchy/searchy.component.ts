import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channel/channel.service';
import { Userid } from '../user-id';
import {Repositories} from '../repositories';

@Component({
  selector: 'app-searchy',
  templateUrl: './searchy.component.html',
  styleUrls: ['./searchy.component.css']
})

export class SearchyComponent implements OnInit {
  userid:Userid;
  repositories:Repositories;
  username:string;

  constructor(private channelService:ChannelService) { }

  ngOnInit() {
    this.searchGit("LeoAmby")
  }

searchGit(searchTerm){
    this.channelService.searchy(searchTerm).then(
      (results)=>{
        this.userid = this.channelService.userid;
        console.log(this.userid);
        
      },
      (error)=>{
        console.log(error)
      }
    )
    this.channelService.reppy(searchTerm).then(
      (results)=>{
         this.repositories = this.channelService.repos;
         console.log(this.repositories)
      },
      (error)=>{
        console.log(error)
      }

    )
}

}
