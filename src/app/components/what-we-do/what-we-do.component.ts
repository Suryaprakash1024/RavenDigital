import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {
  data : any[] = [];
  ngOnInit(){
    this.data = [{title:'APP DEVELOPMENT',content:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
                  {title:'WEBSITE DEVELOPMENT', content:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
                  {title:'UI/UX DESIGNING', content:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
                  {title:'DIGITAL MARKETING', content:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
                  {title:'SEO & CONTENT WRITING', content:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'},
                  {title:'GRAPHIC DESIGNING', content:'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}];
  }
}
