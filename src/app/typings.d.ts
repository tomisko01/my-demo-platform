export interface TopicNode {
  name: string;
  routerLink?: string,
  githubLinkNeeded?: boolean;
  githubLink?: string;
  children?: TopicNode[];
  title?: string;
  usesConsole?: boolean;
}

declare namespace elden {

  export interface Response {
    count: number;
    data: any[];
    success: boolean;
    total: number;
  }

  export interface Item {
    description: string;
    effect: string;
    id: string;
    image: string;
    name: string;
    type: string;
  }

  export interface Location {
    id: string;
    name: string;
    image: string;
    region: string;
    description: string;
    itemId?: string;
  }

  export interface ItemType {
    id: string;
    name: string;
  }

}
