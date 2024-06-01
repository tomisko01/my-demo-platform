import {Component, Input} from '@angular/core';
import {TopicNode} from "../../typings";

@Component({
  selector: 'app-topic-header',
  templateUrl: './topic-header.component.html',
  styleUrl: './topic-header.component.css'
})
export class TopicHeaderComponent {

  @Input()
  topic: TopicNode;


  openGithubLink() {
    window.open(this.topic.githubLink);
  }
}
