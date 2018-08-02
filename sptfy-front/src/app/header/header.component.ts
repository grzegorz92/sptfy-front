import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  buttonColor: boolean = true;


  constructor() { }

  ngOnInit() {
  }

  onChangeButtonColor(){
    this.buttonColor = !this.buttonColor;
  }

}
