import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mod-home',
  templateUrl: './mod-home.component.html',
  styleUrls: ['./mod-home.component.css']
})
export class ModHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goesNavbar() {
    this.router.navigate(['com-navbar']);
  }
}
