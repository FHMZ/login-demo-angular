import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mod-login',
  templateUrl: './mod-login.component.html',
  styleUrls: ['./mod-login.component.css']
})
export class ModLoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logarApp() {
    this.router.navigate(['/home']);
  }
}
