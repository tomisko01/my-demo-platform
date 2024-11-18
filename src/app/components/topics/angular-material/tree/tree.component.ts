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
  MatTreeNodePadding,
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
    MatTreeNodeOutlet,
    MatTreeNodePadding
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

  flatTreeCtrl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  )
  flatDataSource = new MatTreeFlatDataSource(this.flatTreeCtrl, this.treeFlattener)

  constructor() {
    this.nestedDataSource.data = this.constants.TREE_DATA
    this.flatDataSource.data = this.constants.TREE_DATA
  }

  hasNestedChild(index: number, nodeData: TopicNode): boolean {
    return !!nodeData.children && nodeData?.children?.length > 0
  };

  hasFlatChild(index: number, node: ExampleFlatNode): boolean {
    return node.expandable
  }

}
