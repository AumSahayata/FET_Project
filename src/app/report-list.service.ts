import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportListService {

  reports: any[] = [
    {subject:'Frequent powercuts without anyreason',status:'Working on'},
    {subject:'Repair the old streetlight',status:'Resolved'}
  ]

  constructor() { }
}
