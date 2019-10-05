import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  someParam: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.someParam = this.activatedRoute.snapshot.parent.paramMap.get('someParam');
    const someParamParent = this.activatedRoute.snapshot.parent.paramMap.get('someParam');
    console.log('tabs init', this.someParam, someParamParent);
  }

}
