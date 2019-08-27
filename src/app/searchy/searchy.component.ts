import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channel/channel.service';

@Component({
  selector: 'app-searchy',
  templateUrl: './searchy.component.html',
  styleUrls: ['./searchy.component.css']
})
export class SearchyComponent implements OnInit {

  constructor(public channelService: ChannelService) { }

  ngOnInit() {
  }
searchy(searchTerm){
    console.log(searchTerm)
}
}
