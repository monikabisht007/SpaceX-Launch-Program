import { HttpClientModule } from '@angular/common/http';
import { not } from '@angular/compiler/src/output/output_ast';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { RocketLaunchComponent } from './rocket-launch/rocket-launch.component';
import { CommonService } from './services/common.service';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientModule],
        declarations: [AppComponent, RocketLaunchComponent],
        providers: [CommonService],
        schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app,'updateApiFilters');
    expect(app).toBeTruthy();
  });

  it(`should have as title spacex-launch`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('spacex-launch');
  });

  it('should apply filter on launch year', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var type = 'launch_year';
    app.filters = {
      limit: 100,
      launch_year: undefined,
      launch_success: undefined,
      land_success: undefined,
    };
    var eventData = {
      target : {
        innerText: '2006'
      }
    }
    app.updateApiFilters(type,eventData);
    
  });

  it('should apply filter when sucessfull launch is true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var type = 'launch_success';
    app.filters = {
      limit: 100,
      launch_year: undefined,
      launch_success: undefined,
      land_success: undefined,
    };
    var eventData = {
      target : {
        innerText: 'true'
      }
    }
    app.updateApiFilters(type,eventData);
     
  });

  it('should apply filter  successfull landing is true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var type = 'land_success';
    app.filters = {
      limit: 100,
      launch_year: undefined,
      launch_success: undefined,
      land_success: undefined,
    };
    var eventData = {
      target : {
        innerText: 'true'
      }
    }
    app.updateApiFilters(type,eventData);  
   
  });

});
