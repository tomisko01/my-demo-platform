export interface TopicNode {
  name: string;
  routerLink?: string,
  githubLink?: string;
  children?: TopicNode[];
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

}
