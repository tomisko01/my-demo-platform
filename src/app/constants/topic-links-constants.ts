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
          routerLink: '/angular/newProject',
          githubLinkNeeded: false
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
            routerLink: '/angular/structuralDirective'
          }]
        },
        {
          name: 'Styles',
          children: [{
            name: 'Host',
            routerLink: '/angular/stylesHost'
          }, {
            name: 'Encapsulation',
            routerLink: '/angular/stylesEncapsulation'
          }]
        },
        {
          name: 'Services',
          children: [{
            name: 'Get call',
            routerLink: '/angular/services/getCall'
          },
            {
              name: 'Dependency injection',
              children: [{
                name: 'Own provider',
                routerLink: '/angular/services/ownProvider',
                title: 'How to write own service provider',
                githubLinkNeeded: true,
                githubLink: 'https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/services/dependencyInjection/own-provider/own-provider.component.ts'
              }, {
                name: 'Own provider simplified',
                routerLink: '/angular/services/ownProviderSimplified',
                title: 'How to simplify own service provider',
                githubLinkNeeded: true,
                githubLink: 'https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/services/dependencyInjection/own-provider-simplified/own-provider-simplified.component.ts'
              }, {
                name: 'Hierarchical Injection',
                routerLink: '/angular/services/hierarchicalInjection',
                title: 'How dependencies are provided to children components',
                githubLinkNeeded: true,
                githubLink: 'https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/services/dependencyInjection/hierarchical-injection/hierarchical-injection.component.ts',
              }, {
                name: 'Tree shakeable provider',
                routerLink: '/angular/services/treeShakeableProvider',
                title: ',,,'
              }, {
                name: 'Injection tokens',
                routerLink: '/angular/services/injectionToken'
              }, {
                name: 'Injection decorators',
                routerLink: '/angular/services/injectionDecorator'
              }]
            }]
        },
        {
          name: 'Change detection',
          children: [{
            name: 'Default detection',
            routerLink: '/angular/changeDetection/defaultChangeDetection',
            title: 'Default change detection mechanism',
            githubLink: 'https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/services/changeDetection/default/default.component.ts'
          }, {
            name: 'On Push detection',
            routerLink: '/angular/changeDetection/onPushChangeDetection',
            title: 'On push detection',
            githubLink: 'https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/services/changeDetection/on-push/on-push.component.ts'
          }, {
            name: 'Observable On Push detection',
            routerLink: '/angular/changeDetection/observableOnPushChangeDetection',
            title: 'Use observable with on push',
            githubLink: 'https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/services/changeDetection/observable-on-push/observable-on-push.component.ts'
          }, {
            name: 'Attribute decorator',
            routerLink: '/angular/changeDetection/attributeDecorator',
            title: 'Attribute decorator (one-way binding)',
            githubLink: 'https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/services/changeDetection/attribute-decorator/attribute-decorator.component.ts',
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
  ];

  public home: TopicNode = {
    name: 'Home',
    routerLink: '/',
    githubLinkNeeded: false
  }

  public allTopics: TopicNode[] = [...this.TREE_DATA, this.home];
}
