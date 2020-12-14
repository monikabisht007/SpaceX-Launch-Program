import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-poetry-home',
  templateUrl: './poetry-home-page.component.html',
  styleUrls: ['./poetry-home-page.component.css']
})
export class PoetryHomePageComponent implements OnInit {
  public authorWithTitles: any;
  public rhymeMessage = false;
  public autoCompleteAuthors: any;
  public autoCompleteTitles: any;
  public rhymeData: any;
  @ViewChild(NgForm) ngForm: NgForm;

  constructor(private commonService: CommonService,
              private router: Router) { }

  ngOnInit(): void {
    this.rhymeMessage = false;
    this.commonService.getAuthors()
      .subscribe(data => {
        this.autoCompleteAuthors = data;
      });

  }

/**
 * filterTitle filter title based on Authors
 */
  filterTitle(event): void {
    this.commonService.getTitles(event.target.value)
      .subscribe(data => {
        this.autoCompleteTitles = data;
      });
  }

  /**
   * searchAuthorWithTitles used to get Author with titles
   */
  searchAuthorWithTitles(form: NgForm): void {

    this.commonService.getAuthorWithTitles(form)
      .subscribe(data => {

        const rhymeScheme = [];
        this.authorWithTitles = data;
        this.commonService.data.emit(this.authorWithTitles);
        for (let i = 0; i <= this.authorWithTitles.length - 1; i++) {
          for (let j = 0; j <= this.authorWithTitles[i].lines.length - 1; j++) {
            if (this.authorWithTitles[i].lines[j] === '') {
              continue;
            } else {
              const endingWordfromLine = this.authorWithTitles[i].lines[j].split(' ');
              rhymeScheme.push(endingWordfromLine[endingWordfromLine.length - 1]);
            }
          }

          this.rhymeData = rhymeScheme.map((word: string) => {
            return (word.match(/[aeiou]*[aeiouy]$|[aeiou]+[^aeiou]+$/) || [''])[0];
          });
          if (this.rhymeData.length !== 0) {
            this.rhymeMessage = true;
          } else {
            this.rhymeMessage = false;
          }
        }

        this.router.navigate(['/searchAuthorWithTitle']);
      });
  }


}
