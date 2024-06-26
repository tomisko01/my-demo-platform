import {Component, Injector, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {TopicLinksConstants} from "./constants/topic-links-constants";
import {TopicNode} from "./typings";
import * as _ from 'lodash-es';
import {NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs";
import {TopicService} from "@service/topic/topic.service";
import {TranslateService} from "@ngx-translate/core";
import {createCustomElement} from "@angular/elements";
import {ElementsChildComponent} from "@angularTopic/elements/child/elements-child/elements-child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'my-demo-platform';
  nestedDataSource = new MatTreeNestedDataSource<TopicNode>();
  nestedTreeControl = new NestedTreeControl<TopicNode>(node => node.children);

  selectedTopic: TopicNode;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private constants: TopicLinksConstants,
              private router: Router,
              private topicService: TopicService,
              private translator: TranslateService,
              private injector: Injector
  ) {

    translator.setDefaultLang('en')
    translator.use('en')

    this.nestedDataSource.data = _.cloneDeep(constants.TREE_DATA)
    this.nestedTreeControl.dataNodes = _.cloneDeep(constants.TREE_DATA)

    this.matIconRegistry.addSvgIcon(
      'github_mark',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-mark/github-mark.svg')
    )
  }

  ngOnInit(): void {

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((navigationEndEvent: NavigationEnd) => navigationEndEvent.url)
    ).subscribe(event => {
      this.selectedTopic = this.topicService.getByURL(event);
    })

    //TODO tutorial not enough, need to check it by myself
    const htmlElement = createCustomElement(ElementsChildComponent, {injector: this.injector})
    customElements.define('app-elements-child',htmlElement)
  }

  openGithubPage() {
    window.open("https://github.com/tomisko01");
  }

  hasNestedChild(index: number, node: TopicNode) {
    return node?.children?.length! > 0
  }

  isLeafWithLink(index: number, node: TopicNode): boolean {
    return !node?.children && !!node.routerLink;
  }

  search(value: string) {

    if (value) {
      let topics: TopicNode[] = _.cloneDeep(this.constants.TREE_DATA);
      let foundNodes = this.searchNodes(topics, value);
      this.nestedDataSource.data = foundNodes;
      this.nestedTreeControl.dataNodes = foundNodes;

      this.nestedTreeControl.expandAll();

    } else {
      this.nestedDataSource.data = _.cloneDeep(this.constants.TREE_DATA);
    }
  }

  private searchNodes(topics: TopicNode[], value: string) {
    return _.filter(topics, (node: TopicNode) => this.findNode(node, value));
  }

  findNode(node: TopicNode, searchText: string): boolean {
    if (node.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    } else if (!_.isNil(node.children) && !_.isEmpty(node.children)) {

      let children = this.findNodeFromChildren(node.children, searchText);
      if (!_.isNil(children) && !_.isEmpty(children)) {
        node.children = children;
        return true;
      }
      return false;
    }
    return false;
  }

  private findNodeFromChildren(children: TopicNode[], searchText: string): TopicNode[] {
    return _.filter(children, (childrenNode) => this.findNode(childrenNode, searchText));
  }
}
