import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  background: string;
  backgroundUrls = [];

  ngOnInit() {
    this.getBackground();
  }


  getBackground() {

    this.backgroundUrls.push("http://hapiclomap.com/wp-content/uploads/2017/02/Hipster-Wallpaper-309-Cool-Picture-Hq-Backgrounds.jpg");
    this.backgroundUrls.push("http://hapiclomap.com/wp-content/uploads/2017/02/Hipster-Wallpaper-343-Perfect-Image-Hd-Backgrounds.jpg");
    this.backgroundUrls.push("http://hapiclomap.com/wp-content/uploads/2017/02/Hipster-Wallpaper-382-Fantastic-Hd-Images-Backgrounds.jpg");
    this.backgroundUrls.push("http://hapiclomap.com/wp-content/uploads/2017/02/Hipster-Wallpaper-364-Amazing-Pictures-Hd-Backgrounds.jpg");
    this.backgroundUrls.push("http://www.tematy.info/library/t/tumblr-desktop-backgrounds-hipster/tumblr-desktop-backgrounds-hipster-05.jpg");
    this.backgroundUrls.push("http://avante.biz/wp-content/uploads/Hipster-Wallpaper-Hd/Hipster-Wallpaper-Hd-050.jpg");
    this.backgroundUrls.push("https://www.hdwallback.net/wp-content/uploads/2015/07/Hipster-Backgrounds-beach.jpg");
    this.backgroundUrls.push("https://u01.appmifile.com/images/2016/07/15/923bd1bd-23d9-45f7-9a40-a38c000cb5de.jpg");
    this.backgroundUrls.push("https://img.wallpapersafari.com/desktop/1920/1080/22/65/aZkj81.jpg");
    this.background = this.backgroundUrls[Math.floor(Math.random() * this.backgroundUrls.length)];
  }

}
