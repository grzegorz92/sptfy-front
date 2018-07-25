import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  background: string;
  backgroundUrls = [];

  ngOnInit() {
    this.getBackground();
  }


  getBackground() {

    this.backgroundUrls.push("https://img.wallpapersafari.com/desktop/1920/1080/16/37/7gBJDt.jpg");
    this.backgroundUrls.push("http://hapiclomap.com/wp-content/uploads/2017/02/Hipster-Wallpaper-343-Perfect-Image-Hd-Backgrounds.jpg");
    this.backgroundUrls.push("http://cheaprbsunglassoutelt.us/wp-content/uploads/2018/03/hipster-wallpaper-fresh-hipster-wallpaper-of-hipster-wallpaper.jpg");
    this.backgroundUrls.push("https://livewallpaper.info/wp-content/uploads/2017/08/full-hd-hipster-wallpaper-wpc9005349-1024x640.jpg");
    this.background = this.backgroundUrls[Math.floor(Math.random() * this.backgroundUrls.length)];
    // this.background = "https://livewallpaper.info/wp-content/uploads/2017/08/full-hd-hipster-wallpaper-wpc9005349-1024x640.jpg";
  }

}
