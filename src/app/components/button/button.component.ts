import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() color = 'btn-primary';
  @Input() type = 'button';
  @Input() disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
