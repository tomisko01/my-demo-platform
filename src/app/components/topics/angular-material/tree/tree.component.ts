import {Component, inject} from '@angular/core';
import {TopicLinksConstants} from "../../../../constants/topic-links-constants";
import {
  MatNestedTreeNode,
  MatTree,
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodeOutlet,
  MatTreeNodeToggle
} from "@angular/material/tree";
import {TopicNode} from "../../../../typings";
import {FlatTreeControl, NestedTreeControl} from "@angular/cdk/tree";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";


interface ExampleFlatNode {
  name: string;
  expandable: boolean;
  level: number;
}
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

  treeFlattener = new MatTreeFlattener(
    (node: TopicNode, level: number): ExampleFlatNode => {
      return {
        name: node.name,
        expandable: !!node.children && node.children?.length > 0,
        level
      }
    },
    node => node.level,
    node => node.expandable,
    node => node.children
  )

  flatDataSource = new MatTreeFlatDataSource()
  flatTreeCtrl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  )

  constructor() {
    this.nestedDataSource.data = this.constants.TREE_DATA
  }

  //todo add typings
  hasNestedChild(index: number, nodeData: any): boolean {
    return nodeData?.children?.length > 0
  };

}
