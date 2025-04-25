import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Name, Language } from './name';

@Component({
    selector: 'app-task3-a',
    templateUrl: './task3-a.component.html',
    styleUrls: ['./task3-a.component.less'],
    standalone: false
})
export class Task3AComponent {

  nameForm: FormGroup;
  names: Name[] = [];

  constructor(private fb: FormBuilder) { 
    this.nameForm = fb.group({
      title: ['', []],
      first_name: ['', [Validators.required]],
      middle_name: ['', []],
      last_name: ['', [Validators.required]]
    }, {
      updateOn: 'change',
    });
  }

  submitName(){
    if (this.nameForm.valid){  
      let name = new Name(
          this.nameForm.get('first_name')?.value,
          this.nameForm.get('last_name')?.value,
          this.nameForm.get('middle_name')?.value,
          this.nameForm.get('title')?.value
        );
      this.names.push(name);
    }
  }

  protected readonly Language = Language;
}
