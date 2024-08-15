import {Injectable} from '@angular/core';
import {TopicNode} from "../../typings";
import {TopicLinksConstants} from "../../constants/topic-links-constants";
// import * as _ from 'lodash-es'; TODO fix it
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private topics: TopicLinksConstants) {
  }

  getByURL(url: string): TopicNode {

    let topics: TopicNode[] = _.cloneDeep(this.topics.allTopics)

    return this.searchByUrl(url, topics)
  }

  private searchByUrl(url: string, topics: TopicNode[]): TopicNode {
    let topic = topics.filter(topic => topic.routerLink)
      .find(topic => topic.routerLink === url ||
        (topic.routerLink && this.matchPath(url, topic.routerLink)))

    if (topic) {
      return topic
    }

    let childrenTopics = _(topics)
      .filter(topic => !_.isEmpty(topic.children))
      .flatMap('children')
      .value();

    if (_.isNil(childrenTopics)) {
      throw new Error(`Topic cannot not found`)
    }

    return this.searchByUrl(url, childrenTopics)
  }

  private matchPath(url: string, routerLink: string): boolean {
    return url.split('/').length === routerLink.split('/').length && url.includes(routerLink);
  }
}
