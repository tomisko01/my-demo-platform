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
        },
        {
          name: 'Input property syntax',
          routerLink: '/angular/inputPropertySyntax'
        },
        {
          name: 'Input',
          routerLink: '/angular/input'
        },
        {
          name: 'Output',
          routerLink: '/angular/output'
        },
        {
          name: 'CF-@For',
          routerLink: '/angular/cfFor'
        },
        {
          name: 'CF-@If',
          routerLink: '/angular/cfIf'
        },
        {
          name: 'CF-@Switch',
          routerLink: '/angular/cfSwitch'
        },
        {
          name: 'Conditional styles',
          routerLink: '/angular/conditionalStyles'
        }
      ]
    },
    {
      name: 'More topics',
      children: [
        {
          name: 'Under construction...'
        }
      ]
    }
  ]
}
