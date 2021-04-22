import { Component,  } from '@angular/core';
import { NgModule} from '@angular/core';
import { NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Forty & Eight';
  public isCollapsed = true;
  public constructor(private titleService: Title) {
    this.titleService.setTitle('The Forty & Eight');
  }

}
