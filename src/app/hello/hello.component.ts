import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less']
})
export class HelloComponent implements OnInit {
  ptext:string;
  i:number = 0;
  constructor() { 
    this.ptext = "default constructor"
  }
  dosmth(){
    console.log(`called ${this.i++} times`);
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.i = this.i;
    },1000);
  }

}
