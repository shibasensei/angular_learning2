import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface myData{
  obj:Object;
}


@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  data:any;
  constructor(private HttpClient:HttpClient) {
    this.getDataHttp();
   }

  getData(){
    return  this.data;
  }
  getDataHttp(){
    return this.HttpClient.get<myData>("/api/test.php");
  }
  changeData(user:object,index:number){
    this.data[index] = user;
  }
}
