import { Injectable } from '@angular/core';
import {TopicNode} from "../typings";

@Injectable({
  providedIn: 'root'
})
export class TopicLinksConstants {
  public TREE_DATA: TopicNode[] = [
    {
      name: 'Angular',
      children: [
        {
          name: 'New project',
          routerLink: '/angular/newProject'
        },
        {
          name: 'Interpolation syntax',
          routerLink: '/angular/interpolationSyntax'
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
}
