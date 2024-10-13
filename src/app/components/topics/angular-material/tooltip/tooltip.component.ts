import { Component } from '@angular/core';
import {MatMiniFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [
    MatMiniFabButton,
    MatTooltip,
    MatIcon,
    MatDivider
  ],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {

}
