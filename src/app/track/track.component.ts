import { Component } from '@angular/core';
import { ReportListService } from '../report-list.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {


reportList:any[] = []
  constructor(r:ReportListService){
    this.reportList = r.reports;
  }
}
