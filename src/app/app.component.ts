import { Component } from '@angular/core';
import { RecordsService } from './records.service';

// interface myData{
//   obj:Object;
// }

function log(target:any,name:any,descriptor:any){
  console.log(target,name,descriptor);
  const original = descriptor.value;
  original();
  descriptor.value = function(...args:any){
    console.log("Arguments:", args);
    //console.log("this = ", this);
    const result = original.apply(5,args);
    console.log("Result of the fucntion is ", result);
    //console.log("target = ",target);
    //console.log("name = ",name);
    return result;
  }
  
}

const log2 = (className:any) => {
  console.log(className);
  return (...args:any) =>{
    console.log("arguments passed = ", args);
    console.log(typeof(className))
    return args;
  }
}

// @log2("test")
// class testClass{
//   constructor(arg1:any,arg2:any){
//     console.log("constructor runs");
//   }
// }

// const test2 = new testClass(5,10);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
// @log2
export class AppComponent {
  records:any;
  myVar = 1;
  
  constructor(private RecordService:RecordsService, ){
    // setInterval(()=>{
    //   this.myVar = Math.random()*10;
    // },1000);
    // console.log("by constructor - ", this.method(5,2));
  }

  ngOnInit(){
    // this.RecordService.getDataHttp()
    // .subscribe(data=>{
    //   this.records = data.obj;
    //   console.log("records",this.records);
    // });
    
  }

  myFunct(){
    this.myVar++;
    console.log(this.myVar);
  }
  updateValue(e:any){
    this.myVar = e.target.value;
  }
  // @log
  // method(a:any,b:any){
  //   return a*b;
  // }
}
