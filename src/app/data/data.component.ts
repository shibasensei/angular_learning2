import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.less']
})
export class DataComponent implements OnInit {
  records:any;
  constructor(private RecordsService:RecordsService) {
    
   }

  ngOnInit(): void {
    this.RecordsService.getDataHttp()
    .subscribe(data=>{
      this.records = data.obj;
    })
  }

}
