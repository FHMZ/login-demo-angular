import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-com-navbar',
  templateUrl: './com-navbar.component.html',
  styleUrls: ['./com-navbar.component.css']
})
export class ComNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const btnOpenSidebar = document.getElementById('menu-toggle');
    btnOpenSidebar.addEventListener('click', function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    }, false);
  }

}
