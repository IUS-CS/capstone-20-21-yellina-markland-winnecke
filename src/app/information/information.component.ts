import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  imageObject = [{
    image: 'assets/img/img1.jpg',
    thumbImage: 'assets/img/img1.jpg',
    title: 'For your health'
  }, {
    image: 'assets/img/img2.png',
    thumbImage: 'assets/img/img2.png'
  }, {
    image: 'assets/img/img3.gif',
    thumbImage: 'assets/img/img3.gif'
  }, {
    image: 'assets/img/img4.jpg',
    thumbImage: 'assets/img/img4.jpg'
  }, {
    image: 'assets/img/img5.jpg',
    thumbImage: 'assets/img/img5.jpg'
  }, {
    video: 'https://youtu.be/dQw4w9WgXcQ',
    title: 'Never gonna give you up',
    alt: 'yt video'
  }];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPage(): void
  {
    this.router.navigate(['/admin']);


  }
}
