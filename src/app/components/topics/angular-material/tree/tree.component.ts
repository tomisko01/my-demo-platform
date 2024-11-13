import {Component, inject} from '@angular/core';
import {TopicLinksConstants} from "../../../../constants/topic-links-constants";
import {MatTree, MatTreeNestedDataSource} from "@angular/material/tree";
import {TopicNode} from "../../../../typings";
import {NestedTreeControl} from "@angular/cdk/tree";

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [
    MatTree
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {

  constants = inject(TopicLinksConstants)

  nestedDataSource = new MatTreeNestedDataSource<TopicNode>()
  nestedTreeCtrl = new NestedTreeControl<TopicNode>(node => node.children);

  constructor() {
    this.nestedDataSource.data = this.constants.TREE_DATA
  }

}
