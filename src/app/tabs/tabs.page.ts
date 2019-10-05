import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  someParam: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.someParam = this.activatedRoute.snapshot.parent.paramMap.get('someParam');
    console.log('tabs init', this.someParam);
    this.router.navigate(['/' + this.someParam + '/tabs/tabs/tab1']);
  }

}
