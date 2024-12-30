import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MenuLateralComponent, CabecalhoComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'linguagens';
}
