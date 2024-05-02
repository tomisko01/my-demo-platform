import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {TopicLinksConstants} from "./constants/topic-links-constants";
import {TopicNode} from "./typings";
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'my-demo-platform';
  nestedDataSource = new MatTreeNestedDataSource<TopicNode>();
  nestedTreeControl = new NestedTreeControl<TopicNode>(node => node.children);

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private constants: TopicLinksConstants
  ) {
    this.nestedDataSource.data = _.cloneDeep(constants.TREE_DATA);

    this.matIconRegistry.addSvgIcon(
      'github_mark',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-mark/github-mark.svg')
    );
  }

  ngOnInit(): void {
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
      this.nestedDataSource.data = _.filter(topics, (x: TopicNode) => this.findNode(x, value));


    } else {
      this.nestedDataSource.data = _.cloneDeep(this.constants.TREE_DATA);
    }
  }

  findNode(node: TopicNode, searchText: string): boolean {
    if (node.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    } else if (!_.isNil(node.children) && !_.isEmpty(node.children)) {
      return this.findNodeFromChildren(node.children, searchText);
    }
    return false;
  }

  private findNodeFromChildren(children: TopicNode[], searchText: string): boolean {
    let topicNodes = _.filter(children, (childrenNode) => this.findNode(childrenNode, searchText));
    return !_.isEmpty(topicNodes);
  }
}
