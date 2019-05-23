import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-with-error',
  templateUrl: './with-error.component.html',
  styleUrls: ['./with-error.component.css']
})
export class WithErrorComponent implements OnInit {

  @Input() style: any;

  constructor() { }

  ngOnInit() {
  }

  type:any;
  getType(){
    this.type = typeof(this.style);
  }
}
