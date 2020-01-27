import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers] -> used for attributes in html tags
  //selector: '.app-server'  -> used for classes in html tags
  selector: 'app-servers', //-> used as an element/tag in html
  //template: `<app-server></app-server> 
            //<app-server></app-server>` -> the backticks help for multiline
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  username = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  displayMessage = false;
  displayButtonRecord = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {

  }

  onAddUsername() {
    this.username = '';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  } 

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername(event: Event) {
    //<HTMLInputElement> is explicit casting so that angular 
    //knows what kind of data it is
    this.username = (<HTMLInputElement>event.target).value; 
  }

  onDisplayMessage() {
    if(!this.displayMessage) {
      var ts = new Date();
      this.displayButtonRecord.push(` ${ts.toLocaleTimeString()}, ${ts.toDateString()}`);
    }

    this.displayMessage = !this.displayMessage;
  }
}

