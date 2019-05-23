import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-without-error',
  templateUrl: './without-error.component.html',
  styleUrls: ['./without-error.component.css']
})
export class WithoutErrorComponent implements OnInit {

  constructor() { }

  @Input() something: any;
  
  ngOnInit() {
  }

  type:any;
  getType(){
    this.type = typeof(this.something);
  }
}
