import {Component, OnInit, ViewChild} from '@angular/core';
import {RequestsService} from "../../requests.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') login: NgForm;

  constructor(private requestService: RequestsService) {
  }


  ngOnInit() {
  }


  // onGetToken(form: HTMLFormElement) { - in html -> <form (ngSubmit)="onGetToken()" #f>
  onGetToken(form: NgForm) {  //-> in html(ngSubmit)="onGetToken(f)" #f="ngForm"

    console.log(form); //the same
    console.log(this.login); //the same

    this.requestService.getToken('username', 'password', 'password')
      .subscribe(
        (response) => {
          console.log("onGetToken")
        },
        (error) => {
        },
        () => {
        }
      )
  }

}
