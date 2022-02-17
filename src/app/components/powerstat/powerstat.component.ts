import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-powerstat',
  templateUrl: './powerstat.component.html',
  styleUrls: ['./powerstat.component.css']
})
export class PowerstatComponent implements OnInit {

  @Input() powerstat:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
