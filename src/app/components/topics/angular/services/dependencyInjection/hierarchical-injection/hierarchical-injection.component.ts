import {Component, OnInit} from '@angular/core';
import {MyService} from "@angularTopic/services/dependencyInjection/service/my.service";
import {HierarchicalService} from "@angularTopic/services/dependencyInjection/service/hierarchical.service";

@Component({
  selector: 'app-hierarchical-injection',
  templateUrl: './hierarchical-injection.component.html',
  styleUrl: './hierarchical-injection.component.css',
  providers: [MyService, HierarchicalService]
})
export class HierarchicalInjectionComponent implements OnInit {

  constructor(private myService: MyService,
              private mySecondService: HierarchicalService) {
  }

  ngOnInit(): void {
  }

}
