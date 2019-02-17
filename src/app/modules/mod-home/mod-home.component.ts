import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-mod-home',
  templateUrl: './mod-home.component.html',
  styleUrls: ['./mod-home.component.css']
})
export class ModHomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    // const btnOpenSidebar = document.getElementById('menu-toggle');
    // btnOpenSidebar.addEventListener('click', function (e) {
    //   e.preventDefault();
    //   $('#wrapper').toggleClass('toggled');
    // }, false);
    // const sidebarHeading = document.getElementById('sidebar');
    // sidebarHeading.addEventListener('click', function (e) {
    //   e.preventDefault();
    //   $('#wrapper').toggleClass('toggled');
    // }, false);
  }
}
