import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public uniqueLaunchYears: number[];
  public title = 'spacex-launch';
  public rocketDetails: number[];
  public filters: {};

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.uniqueLaunchYears = new Array(16).fill(0).map((_, index) => 2006 + index);
    this.filters = {
      limit: 100,
      launch_year: undefined,
      launch_success: undefined,
      land_success: undefined,
    };
  }


  /**
   * updateApiFilters used to filter the space data based on launch year,Successful Launch and land
   */
  updateApiFilters(type: string, event): void {

    if (this.filters[type] === event.target.innerText) {
      this.filters = {
        ...this.filters,
        [type]: undefined
      };
    } else {
      this.filters = {
        ...this.filters,
        [type]: event.target.innerText
      };
    }

    this.commonService.getFilteredRocketDetails(this.filters)
      .subscribe(data => {
        this.rocketDetails = data;
        this.commonService.data.emit(this.rocketDetails);
      });
  }

}

