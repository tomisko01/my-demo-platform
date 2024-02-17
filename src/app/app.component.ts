import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";

interface TopicNode {
  name: string;
  routerLink?: string,
  children?: TopicNode[];
}

const TREE_DATA: TopicNode[] = [
  {
    name: 'Angular',
    children: [
      {
        name: 'New project',
        routerLink: '/first'
      },
      {
        name: 'Interpolation syntax',
        routerLink: '/second'
      }
    ]
  },
  {
    name: 'More topics',
    children: [
      {
        name: 'Under construction'
      }
    ]
  }
]

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
              private domSanitizer: DomSanitizer
  ) {
    this.nestedDataSource.data = TREE_DATA;

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
}
