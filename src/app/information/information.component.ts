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

  zoom: number = 15; // initial zoom level
  public lat = 38.29682357886059; // initial center position
  public lng = -85.83484997139513;
  public origin: any;
  public destination: any;

  ngOnInit(): void {
    // this.getDirection();
  }

  getDirection(): void {
    this.origin = { lat: 38.29583127892305, lng: -85.8297131673367 };
    this.destination = { lat: 38.29682357886059, lng: -85.83484997139513 };

    // Location within a string
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }

  goToPage(): void
  {
    this.router.navigate(['/admin']);
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markers: marker[] = [
    {
      lat: 38.29682357886059,
      lng: -85.83484997139513,
      label: 'A',
      draggable: false
    }
  ];
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
