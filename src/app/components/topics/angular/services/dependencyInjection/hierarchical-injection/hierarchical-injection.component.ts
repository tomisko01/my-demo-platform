import {Component, OnInit} from '@angular/core';
import {MyService} from "@angularTopic/services/dependencyInjection/service/my.service";
import {MySecondService} from "@angularTopic/services/dependencyInjection/service/my-second.service";

@Component({
  selector: 'app-hierarchical-injection',
  templateUrl: './hierarchical-injection.component.html',
  styleUrl: './hierarchical-injection.component.css',
  providers: [MyService, MySecondService]
})
export class HierarchicalInjectionComponent implements OnInit {

  constructor(private myService: MyService,
              private mySecondService: MySecondService) {
  }

  ngOnInit(): void {
  }

}
