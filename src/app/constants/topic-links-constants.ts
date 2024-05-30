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
        },
        {
          name: 'Content Child',
          routerLink: '/angular/contentChild'
        },
        {
          name: 'Ng-template',
          routerLink: '/angular/ngTemplate'
        },
        {
          name: 'Directive',
          children: [{
            name: 'Highlighted Directive',
            routerLink: '/angular/highlightedDirective'
          }, {
            name: 'Structural Directive',
            routerLink: 'angular/structuralDirective'
          }]
        },
        {
          name: 'Styles',
          children: [{
            name: 'Host',
            routerLink: 'angular/stylesHost'
          }, {
            name: 'Encapsulation',
            routerLink: 'angular/stylesEncapsulation'
          }]
        },
        {
          name: 'Services',
          children: [{
            name: 'Get call',
            routerLink: 'angular/services/getCall'
          },
            {
              name: 'Dependency injection',
              children: [{
                name: 'Own provider',
                routerLink: 'angular/services/ownProvider'
              }, {
                name: 'Own provider simplified',
                routerLink: 'angular/services/ownProviderSimplified'
              }, {
                name: 'Hierarchical Injection',
                routerLink: 'angular/services/hierarchicalInjection'
              }, {
                name: 'Tree shakeable provider',
                routerLink: 'angular/services/treeShakeableProvider'
              }, {
                name: 'Injection tokens',
                routerLink: 'angular/services/injectionToken'
              }, {
                name: 'Injection decorators',
                routerLink: 'angular/services/injectionDecorator'
              }]
            }]
        },
        {
          name: 'Change detection',
          children: [{
            name: 'Default detection',
            routerLink: 'angular/changeDetection/defaultChangeDetection'
          }, {
            name: 'On Push detection',
            routerLink: 'angular/changeDetection/onPushChangeDetection'
          }, {
            name: 'Observable On Push detection',
            routerLink: 'angular/changeDetection/observableOnPushChangeDetection'
          }, {
            name: 'Attribute decorator',
            routerLink: 'angular/changeDetection/attributeDecorator',
            githubLink: 'ameno',
          }]
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
