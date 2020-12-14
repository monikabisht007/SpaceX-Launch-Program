import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-poetry-display',
  templateUrl: './poetry-display.component.html',
  styleUrls: ['./poetry-display.component.css']
})
export class PoetryDisplayComponent implements OnInit {
  public authorWithTitles: [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.data.subscribe(data => this.authorWithTitles = data);
  }
}
