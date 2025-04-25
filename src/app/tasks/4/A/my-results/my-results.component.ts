import { Component } from '@angular/core';
import {configuration} from '../../../../configuration/configuration'

@Component({
    selector: 'app-my-results',
    templateUrl: './my-results.component.html',
    styleUrls: ['./my-results.component.less'],
    standalone: false
})
export class MyResultsComponent {
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



  constructor() {
    let data = configuration.flatMap((task, taskIndex) => {
      return Object.entries(task).map(([key, value]) => {
        const completedCount = Object.values(value.subTasks).filter(v => v === true).length;
        return {
          name: `${taskIndex + 1}${key}`,
          value: completedCount
        };
      });
    });
    Object.assign(this, { data });
   }

}

type DataEntry = {
  name: string;
  value: number;
};