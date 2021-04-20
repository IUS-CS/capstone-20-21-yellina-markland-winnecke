import { Component,  } from '@angular/core';
import { NgModule} from '@angular/core';
import { NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Forty & Eight';
  public isCollapsed = true;
}
