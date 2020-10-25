import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private ts:TaskService) { }

  ngOnInit(): void {
    
  }
  
  
}
