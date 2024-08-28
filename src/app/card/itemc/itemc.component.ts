import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemc',
  templateUrl: './itemc.component.html',
  styleUrls: ['./itemc.component.scss'],
})
export class ItemcComponent  implements OnInit {
@Input()rendering: any;
  constructor() { }

  ngOnInit() {}

}
