import { Component } from "@angular/core";
@Component({
  selector: 'pm-root',
  template:  `
  
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand' >{{siteTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' [routerLink]="['/welcome']" >Home</a></li>
      <li><a class='nav-link' [routerLink]="['/products']" >Product List</a></li>
    </ul>
  </nav>
    
  <div class="container-fluid">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  siteTitle: string = 'Reach-Up Trade Uganda';
  siteAbrv: string = 'R-U-T Ug';
}