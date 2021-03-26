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
  }, {
    image: 'assets/img/img2.jpg',
    thumbImage: 'assets/img/img2.jpg'
  }, {
    image: 'assets/img/img3.jpg',
    thumbImage: 'assets/img/img3.jpg'
  }, {
    video: 'https://youtu.be/Gld0XCDxDFE',
    title: 'New Albany',
    alt: 'yt video'
  }];
  constructor(private router: Router) { }
  public lat = 38.29689221899484;
  public lng = -85.83498639037305;
  public origin: any;
  public destination: any;
  ngOnInit(): void {
    this.getDirection();
  }
  getDirection(): void {
    this.origin = { lat: 38.29583127892305, lng: -85.8297131673367 };
    this.destination = { lat: 38.29689221899484, lng: -85.83498639037305 };

    // Location within a string
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }
  goToPage(): void
  {
    this.router.navigate(['/admin']);


  }
}
