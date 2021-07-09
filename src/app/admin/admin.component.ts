import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //get data 
    let a = false; 
    if(a){

    }else{
      window.alert('AHTUNG');
    }
  }

}
