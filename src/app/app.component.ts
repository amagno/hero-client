import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  path = '';
  constructor(
    private location: Location
  ) {}

  ngOnInit() {
    console.log('set path');
  }
  isActive(path: string) {
    return path === this.location.path();
  }
}
