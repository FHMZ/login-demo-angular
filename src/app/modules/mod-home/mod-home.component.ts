import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'mod-home',
  templateUrl: './mod-home.component.html',
  styleUrls: ['./mod-home.component.css']
})
export class ModHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    $("#sidebar").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
