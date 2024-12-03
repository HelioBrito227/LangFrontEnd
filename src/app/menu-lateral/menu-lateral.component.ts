import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-menu-lateral',
    imports: [CommonModule, RouterLink, NgbNavModule],
    templateUrl: './menu-lateral.component.html',
    styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
  collapsed: boolean = false
  classe: boolean = false
  active = 'top';
  clickEvent() {
    this.collapsed = !this.collapsed;

    this.classe = !this.classe;
  }

}
