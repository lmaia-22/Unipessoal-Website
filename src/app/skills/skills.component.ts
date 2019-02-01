import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/JS/canvasjs.min.js';
import { Options } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  //linear chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public lineChartColors:Array<any> = [
    { 
      borderColor: 'rgb(254,253,2)',
    }];

  public barChartLabels = ['2016', '2017', '2018', '2019'];
  public barChartType = 'line';
  public barChartLegend = false;

  public barChartData = [
    {data: [62, 65, 71, 86]}
  ];
  constructor() { }

   ngOnInit() {
     
 }
}