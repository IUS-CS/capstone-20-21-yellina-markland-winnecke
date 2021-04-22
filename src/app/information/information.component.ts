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
    image: 'assets/img/img4.jpg',
    thumbImage: 'assets/img/img4.jpg'
  }, {
    image: 'assets/img/img5.jpg',
    thumbImage: 'assets/img/img5.jpg'
  }, {
    image: 'assets/img/img6.jpg',
    thumbImage: 'assets/img/img6.jpg'
  }, {
    image: 'assets/img/img7.jpg',
    thumbImage: 'assets/img/img7.jpg'
  }, {
    image: 'assets/img/img8.jpg',
    thumbImage: 'assets/img/img8.jpg'
  }, {
    image: 'assets/img/img9.jpg',
    thumbImage: 'assets/img/img9.jpg'
  }, {
    image: 'assets/img/img10.jpg',
    thumbImage: 'assets/img/img10.jpg'
  }, {
    image: 'assets/img/img11.jpg',
    thumbImage: 'assets/img/img11.jpg'
  }, {
    image: 'assets/img/img12.jpg',
    thumbImage: 'assets/img/img12.jpg'
  }, {
    image: 'assets/img/img13.jpg',
    thumbImage: 'assets/img/img13.jpg'
  }, {
    image: 'assets/img/img14.jpg',
    thumbImage: 'assets/img/img14.jpg'
  }, {
    image: 'assets/img/img15.jpg',
    thumbImage: 'assets/img/img15.jpg'
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
