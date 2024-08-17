import {Component, inject, OnInit, signal} from '@angular/core';
import {elden} from "../../../../../../../typings";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  selector: 'app-elden-item',
  standalone: true,
  imports: [],
  templateUrl: './elden-item.component.html',
  styleUrl: './elden-item.component.css'
})
export class EldenItemComponent implements OnInit {
  item = signal<elden.Item | null>(null)

  locations = signal<elden.Location[]>([])

  route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.item.set(this.route.snapshot.data['item'])
  }

}
