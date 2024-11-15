import {Component, inject} from '@angular/core';
import {TopicLinksConstants} from "../../../../constants/topic-links-constants";
import {
  MatNestedTreeNode,
  MatTree,
  MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef, MatTreeNodeOutlet,
  MatTreeNodeToggle
} from "@angular/material/tree";
import {TopicNode} from "../../../../typings";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [
    MatTree,
    MatTreeNode,
    MatTreeNodeToggle,
    MatTreeNodeDef,
    MatNestedTreeNode,
    MatIconButton,
    MatIcon,
    MatTreeNodeOutlet
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

  //todo add typings
  hasNestedChild(index: number, nodeData: any): boolean {
    return nodeData?.children?.length > 0
  };

}
