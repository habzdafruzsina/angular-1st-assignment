import { Component } from '@angular/core';
import { Labyrinth, TileDetails } from './tile';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-task1-a',
    templateUrl: './task1-a.component.html',
    styleUrls: ['./task1-a.component.less'],
    standalone: false
})
export class Task1AComponent {

  sizeForm: FormGroup;
  labyrinth?: Labyrinth;
  rows: number = 0;
  cols: number = 0;
  isWon: boolean = false;

  constructor(private fb: FormBuilder) { 
    this.sizeForm = fb.group({
      numberOfRows: ['', [Validators.required, Validators.min(3)]],
      numberOfCols: ['', [Validators.required, Validators.min(3)]]
    }, {
      updateOn: 'change',

    });
  }

  changeTile(rowIndex: number, columnIndex: number) {
    if(this.isWon) return;
    this.labyrinth?.changeTile(rowIndex, columnIndex);
    if (this.labyrinth?.checkWin()){
      console.log("you win!");
      this.isWon = true;
    }
  }

  createLabyrinth(){
    if (this.sizeForm.valid){
      this.rows = this.sizeForm.get('numberOfRows')?.value;
      this.cols = this.sizeForm.get('numberOfCols')?.value;
      this.labyrinth = new Labyrinth(this.rows, this.cols);
    }
  }

  protected readonly TileDetails = TileDetails;
}
