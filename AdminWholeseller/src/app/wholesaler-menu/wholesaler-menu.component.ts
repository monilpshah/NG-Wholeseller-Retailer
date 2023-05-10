import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-wholesaler-menu',
  templateUrl: './wholesaler-menu.component.html',
  styleUrls: ['./wholesaler-menu.component.css'] 
})
export class WholesalerMenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,
              private _route:Router  ) {}
  
  onLogout(){
    this._route.navigate(['/']);
 }


  }
