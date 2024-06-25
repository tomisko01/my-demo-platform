import {Injectable} from '@angular/core';
import {TopicNode} from "../typings";

@Injectable({
  providedIn: 'root'
})
export class TopicLinksConstants {

  repoLink: string = 'https://github.com/tomisko01/my-demo-platform/blob/main/'
  angularTopicInRepo: string = this.repoLink + 'src/app/components/topics/angular/'

  public TREE_DATA: TopicNode[] = [
    {
      name: 'Angular',
      children: [
        {
          name: 'New project',
          routerLink: '/angular/newProject',
          title: 'How to create a new project',
          githubLinkNeeded: false
        },
        {
          name: 'Interpolation syntax',
          routerLink: '/angular/interpolationSyntax',
          title: 'How to show something on site',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'interpolation-syntax/interpolation-syntax.component.ts'
        },
        {
          name: 'Input property syntax',
          routerLink: '/angular/inputPropertySyntax',
          title: 'How to use input property syntax',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'input-property-syntax/input-property-syntax.component.ts'
        },
        {
          name: 'Input',
          routerLink: '/angular/input',
          title: 'How to use inputs',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'input/input.component.ts'
        },
        {
          name: 'Output',
          routerLink: '/angular/output',
          title: 'How to use outputs',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'output/output.component.ts'
        },
        {
          name: 'Control flow',
          children: [
            {
              name: 'CF-@For',
              routerLink: '/angular/cfFor',
              title: 'How to use @for in v17',
              githubLinkNeeded: true,
              githubLink: this.angularTopicInRepo + 'control-flow/cf-for/cf-for.component.ts'
            },
            {
              name: 'CF-@If',
              routerLink: '/angular/cfIf',
              title: 'How to use @if in v17',
              githubLinkNeeded: true,
              githubLink: this.angularTopicInRepo + 'control-flow/cf-if/cf-if.component.ts'
            },
            {
              name: 'CF-@Switch',
              routerLink: '/angular/cfSwitch',
              title: 'How to use @switch in v17',
              githubLinkNeeded: true,
              githubLink: this.angularTopicInRepo + 'control-flow/cf-switch/cf-switch.component.ts'
            }
          ]
        },
        {
          name: 'Conditional styles',
          routerLink: '/angular/conditionalStyles',
          title: 'How to use conditional states',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'conditional-styles/conditional-styles.component.ts'
        },
        {
          name: 'Container',
          routerLink: '/angular/ngContainer',
          title: 'When to use ng-container',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'ng-container/ng-container.component.ts'
        },
        {
          name: 'Pipes',
          children: [
            {
              name: 'Build-in pipes',
              routerLink: '/angular/pipe',
              title: 'How to use | pipes ',
              githubLinkNeeded: true,
              githubLink: this.angularTopicInRepo + 'pipe/pipe.component.ts'
            }, {
              name: 'Own pipe',
              routerLink: '/angular/pipe/ownPipe',
              title: 'How to write pipe',
              githubLinkNeeded: true,
              githubLink: this.angularTopicInRepo + 'pipe/own-pipe/component/own-pipe/own-pipe.component.ts'
            }, {
              name: 'i18n pipe',
              routerLink: '/angular/pipe/i18nPipe',
              title: 'How to use internalization',
              githubLinkNeeded: true,
              githubLink: this.angularTopicInRepo + 'pipe/i18n/i18n.component.ts'
            }
          ]
        },
        {
          name: 'View Child',
          routerLink: '/angular/viewChild',
          title: 'How to use View Child ',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'view-child/view-child.component.ts'
        },
        {
          name: 'View Children',
          routerLink: '/angular/viewChildren',
          title: 'How to use @ViewChildren',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'view-children/view-children.component.ts',
          usesConsole: true
        },
        {
          name: 'Content Projection',
          routerLink: '/angular/contentProjection',
          title: 'How to use Content projection',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'content-projection/content-projection.component.ts'
        },
        {
          name: 'Content Child',
          routerLink: '/angular/contentChild',
          title: 'How to use Content child',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'content-child/content-child.component.ts',
          usesConsole: true
        },
        {
          name: 'Ng-template',
          routerLink: '/angular/ngTemplate',
          title: 'How to use ng-template',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'ng-template/ng-template.component.ts'
        },
        {
          name: 'Directive',
          children: [{
            name: 'Highlighted Directive',
            routerLink: '/angular/highlightedDirective',
            title: 'How to create and use a directive',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'directive/component/highlighted-directive-usage/highlighted-directive-usage.component.ts',
            usesConsole: true
          }, {
            name: 'Structural Directive',
            routerLink: '/angular/structuralDirective',
            title: 'How to create and use a structural directive',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'directive/component/ngx-unless/unless-directive-usage/unless-directive-usage.component.ts',
            usesConsole: true
          }]
        },
        {
          name: 'Styles',
          children: [{
            name: 'Host',
            routerLink: '/angular/stylesHost',
            title: 'How to style component',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'styles/host/host.component.ts'
          }, {
            name: 'Encapsulation',
            routerLink: '/angular/stylesEncapsulation',
            title: 'Types of view encapsulation',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'styles/view-encapsulation/view-encapsulation.component.ts'
          }]
        },
        {
          name: 'Services',
          children: [{
            name: 'Get call',
            routerLink: '/angular/services/getCall',
            title: 'How to make call to backend',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'services/get-call/get-call.component.ts'
          },
            {
              name: 'Dependency injection',
              children: [{
                name: 'Own provider',
                routerLink: '/angular/services/ownProvider',
                title: 'How to write own service provider',
                githubLinkNeeded: true,
                githubLink: this.angularTopicInRepo + 'services/dependencyInjection/own-provider/own-provider.component.ts'
              }, {
                name: 'Own provider simplified',
                routerLink: '/angular/services/ownProviderSimplified',
                title: 'How to simplify own service provider',
                githubLinkNeeded: true,
                githubLink: this.angularTopicInRepo + 'services/dependencyInjection/own-provider-simplified/own-provider-simplified.component.ts'
              }, {
                name: 'Hierarchical Injection',
                routerLink: '/angular/services/hierarchicalInjection',
                title: 'How dependencies are provided to children components',
                githubLinkNeeded: true,
                githubLink: this.angularTopicInRepo + 'services/dependencyInjection/hierarchical-injection/hierarchical-injection.component.ts',
              }, {
                name: 'Tree shakeable provider',
                routerLink: '/angular/services/treeShakeableProvider',
                title: 'How to use services as singleton',
                githubLinkNeeded: true,
                githubLink: this.angularTopicInRepo + 'services/dependencyInjection/tree-shakeable-provider/tree-shakeable-provider.component.ts'
              }, {
                name: 'Injection tokens',
                routerLink: '/angular/services/injectionToken',
                title: 'How to inject something different than service',
                githubLinkNeeded: true,
                githubLink: this.angularTopicInRepo + 'services/dependencyInjection/injection-token/injection-token.component.ts'
              }, {
                name: 'Injection decorators',
                routerLink: '/angular/services/injectionDecorator',
                title: 'Other injection decorators',
                githubLinkNeeded: true,
                githubLink: this.angularTopicInRepo + 'services/dependencyInjection/injection-decorators/injection-decorators.component.ts'
              }]
            }]
        },
        {
          name: 'Change detection',
          children: [{
            name: 'Default detection',
            routerLink: '/angular/changeDetection/defaultChangeDetection',
            title: 'Default change detection mechanism',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'services/changeDetection/default/default.component.ts'
          }, {
            name: 'On Push detection',
            routerLink: '/angular/changeDetection/onPushChangeDetection',
            title: 'On push detection',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'services/changeDetection/on-push/on-push.component.ts'
          }, {
            name: 'Observable On Push detection',
            routerLink: '/angular/changeDetection/observableOnPushChangeDetection',
            title: 'Use observable with on push',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'services/changeDetection/observable-on-push/observable-on-push.component.ts'
          }, {
            name: 'Attribute decorator',
            routerLink: '/angular/changeDetection/attributeDecorator',
            title: 'Attribute decorator (one-way binding)',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'services/changeDetection/attribute-decorator/attribute-decorator.component.ts',
          }, {
            name: 'Custom change detection',
            routerLink: '/angular/changeDetection/customChangeDetection',
            title: 'How to write own change detection mechanism',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'services/changeDetection/custom-change-detection/custom-change-detection.component.ts',
            usesConsole: true,
          }]
        },
        {
          name: 'Lifecycle',
          children: [{
            name: 'onInit',
            routerLink: '/angular/lifecycle/onInit',
            title: 'When onInit is called',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'lifecycle/on-init-hook/on-init-hook.component.ts',
            usesConsole: true
          }, {
            name: 'onDestroy',
            routerLink: '/angular/lifecycle/onDestroy',
            title: 'When onDestroy is called',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'lifecycle/on-destroy-hook/on-destroy-hook.component.ts',
            usesConsole: true
          }, {
            name: 'onChanges',
            routerLink: '/angular/lifecycle/onChanges',
            title: 'When onChanges is called',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'lifecycle/on-changes-hook/on-changes-hook.component.ts',
            usesConsole: true
          }, {
            name: 'afterContentChecked',
            routerLink: '/angular/lifecycle/afterContentChecked',
            title: 'When afterContentChecked is called',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'lifecycle/after-content-checked-hook/after-content-checked-hook.component.ts',
            usesConsole: true
          }, {
            name: 'afterViewChecked',
            routerLink: '/angular/lifecycle/afterViewChecked',
            title: 'When afterViewChecked is called',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'lifecycle/after-view-checked-hook/after-view-checked-hook.component.ts',
            usesConsole: true
          }, {
            name: 'lifecycleOverview',
            routerLink: '/angular/lifecycle/lifecycleOverview',
            title: 'Overview of lifecycle hooks',
            githubLinkNeeded: true,
            githubLink: this.angularTopicInRepo + 'lifecycle/lifecycle-overview/lifecycle-overview.component.ts',
            usesConsole: true
          }]
        },
        {
          name: 'Elements',
          routerLink: '/angular/elements',
          title: 'Angular Elements in depth',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'elements/elements.component.ts',
        }, {
          name: 'Standalone',
          routerLink: '/angular/standalone',
          title: 'Standalone components without module',
          githubLinkNeeded: true,
          githubLink: this.angularTopicInRepo + 'standalone/standalone.component.ts',
        },
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
