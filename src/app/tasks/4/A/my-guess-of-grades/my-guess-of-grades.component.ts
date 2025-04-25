import { Component } from '@angular/core';
import {grades} from './grade_guess'

@Component({
    selector: 'app-my-guess',
    templateUrl: './my-guess-of-grades.component.html',
    styleUrls: ['./my-guess-of-grades.component.less'],
    standalone: false
})
export class MyGuessOfGradesComponent {

  grades!: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Szerzett érdemjegy';
  showYAxisLabel = true;
  yAxisLabel = 'Hallgatók száma';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
      Object.assign(this, { grades });
   }

}
