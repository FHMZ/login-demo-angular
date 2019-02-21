import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-com-menu',
  templateUrl: './com-menu.component.html',
  styleUrls: ['./com-menu.component.css']
})
export class ComMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const sidebarHeader = document.getElementById('sidebar');
    sidebarHeader.addEventListener('click', function (e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    }, false);
  }

}
