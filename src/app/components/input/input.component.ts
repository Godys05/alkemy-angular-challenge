import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() label: string = 'Label';
  @Input() type: string = 'text';
  @Input() controlName!: string;
  form!: FormGroup;

  constructor(private rootForm: FormGroupDirective) {
  }
  
  ngOnInit(): void {
    this.form = this.rootForm.control as FormGroup;
  }

}
