import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'my-demo-platform';

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'github_mark',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github-mark/github-mark.svg')
    );
  }

  openGithubPage() {
    window.open("https://github.com/tomisko01");
  }
}
