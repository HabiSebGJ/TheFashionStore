import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  @Input()Items:any;
  @Output()DoClick=new EventEmitter;
  constructor() { }

  ngOnInit() {
    console.log(this.Items);
  }
  click(id: number){
    this.DoClick.emit(id);
  }
}
