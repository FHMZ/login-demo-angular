import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-com-menu',
  templateUrl: './com-menu.component.html',
  styleUrls: ['./com-menu.component.css']
})
export class ComMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const btnOpenSidebar = document.getElementById('menu-toggle');
    btnOpenSidebar.addEventListener('click', function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    }, false);
    const sidebarHeading = document.getElementById('sidebar');
    sidebarHeading.addEventListener('click', function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    }, false);
  }

}
