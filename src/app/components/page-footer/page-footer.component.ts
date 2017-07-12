import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cf-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {

  public copyrightYear: number;

  public ngOnInit() {
    this.copyrightYear = new Date().getFullYear();
  }

}
