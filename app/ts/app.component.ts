import {Component} from 'angular2/core';
import { Config } from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html'
  })

export class AppComponent {
  mainHeading = Config.MAIN_HEADING;
  videos: Array<Video>;

  constructor() {
    this.videos = [
      new Video(1, "Installing Django", "qgGIqRFvFFk", "How to install Django"),
      new Video(1, "Surviving the Wilderness", "Fgwy-UdtyLs", "Bucky goes hiking")
    ];
  }
}
