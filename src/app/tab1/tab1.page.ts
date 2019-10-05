import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const someParam = this.activatedRoute.snapshot.parent.paramMap.get('someParam');
    const someParamParent = this.activatedRoute.snapshot.parent.paramMap.get('someParam');
    console.log('tab1 init', someParam, someParamParent);
  }

}
