import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-rocket-launch',
  templateUrl: './rocket-launch.component.html',
  styleUrls: ['./rocket-launch.component.css']
})
export class RocketLaunchComponent implements OnInit {
  public rocketDetails: [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.data.subscribe(data => this.rocketDetails = data);
    this.commonService.getRocketDetails()
    .subscribe(data => this.rocketDetails = data);
    }

}
