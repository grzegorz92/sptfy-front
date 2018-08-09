import {Component, OnInit} from '@angular/core';
import {RequestsService} from "../../requests.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private requestService: RequestsService) {
  }


  ngOnInit() {
  }


  onGetToken() {

    this.requestService.getToken('username', 'password', 'password')
      .subscribe(
        (response) =>{
          console.log("onGetToken")
        },
        (error)=>{},
        ()=>{}
      )
  }

}
