import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() type: 'success' | 'danger' | 'warning' | 'info' = 'info';
  @Input() header = 'Header';
  @Input() body = 'this is a body message';

  constructor() { }

  ngOnInit(): void {
  }

}
