import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  someParam: number;

  constructor() {}

  ngOnInit() {
    this.someParam = Math.floor(Math.random() * 10);
  }

}
