import { Component } from '@angular/core';
import { ReportListService } from '../report-list.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  sub:string = ''
  stat:string = 'To be processed'

  reportList:any[] = []
  constructor(r:ReportListService){
    this.reportList = r.reports;
  }

  display():void{
    this.reportList.push({subject:this.sub,status:this.stat})
  } 
}
