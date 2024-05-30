import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {TopicNode} from "../../typings";

@Component({
  selector: 'app-topic-header',
  templateUrl: './topic-header.component.html',
  styleUrl: './topic-header.component.css'
})
export class TopicHeaderComponent implements OnInit {

  @Input()
  topic: TopicNode;

  routerParams$: Observable<any>;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    //console.log(this.router);


    //this.router.queryParams.subscribe((params) => console.log(params));
  }
}
