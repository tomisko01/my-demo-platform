import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {HighlightService} from "@service/HighlightService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-get-call',
  templateUrl: './get-call.component.html',
  styleUrl: './get-call.component.css'
})
export class GetCallComponent implements OnInit, AfterViewChecked {

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/services/get-call/get-call.component.ts";
  private highlighted: Boolean = false;
  private wolneLekturyAPI: string = 'https://wolnelektury.pl/api/kinds/';
  private eldenApi: string = 'https://eldenring.fanapis.com/api/items'

  list: any[];

  constructor(private highlightService: HighlightService,
              private http: HttpClient,
  ) {
  }

  openGithubLink(): void {
    window.open(this.githubLink);
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit(): void {
    this.http.get(this.wolneLekturyAPI)
      .subscribe(
        (response) => {console.log(response)}
      );

    this.http.get(this.eldenApi)
      .subscribe(
        (response) => {console.log(response)}
      )
  }
}
