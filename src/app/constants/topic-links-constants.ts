import {Injectable} from '@angular/core';
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
          name: 'Control flow',
          children: [
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
            }
          ]
        },
        {
          name: 'Conditional styles',
          routerLink: '/angular/conditionalStyles'
        },
        {
          name: 'Container',
          routerLink: '/angular/ngContainer'
        },
        {
          name: 'Pipes',
          routerLink: '/angular/pipe'
        },
        {
          name: 'View Child',
          routerLink: '/angular/viewChild'
        },
        {
          name: 'View Children',
          routerLink: '/angular/viewChildren'
        },
        {
          name: 'Content Projection',
          routerLink: '/angular/contentProjection'
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
