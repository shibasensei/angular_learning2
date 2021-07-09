import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.less']
})
export class Test2Component implements OnInit {
  data:any[];
  constructor(private RecordService:RecordsService) {
    this.data = [];

  }

  ngOnInit(): void {
  //  this.RecordService.changeData({name:"Kirill",age:13},0);
  //  console.log("works");
  }

}
