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

    let topics: TopicNode[] = _.cloneDeep(this.topics.allTopics);

    return this.searchByUrl(url, topics);
  }

  private searchByUrl(url: string, topics: TopicNode[]): TopicNode {
    let topic = _.find(topics, {routerLink: url});

    if (topic) {
      return topic;
    }

    let childrenTopics = _(topics)
      .filter(topic => !_.isEmpty(topic.children))
      .flatMap('children')
      .value();

    return this.searchByUrl(url,childrenTopics);
  }

}
