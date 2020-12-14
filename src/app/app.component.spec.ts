import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { PoetryHomePageComponent } from './poetry-home-page/poetry-home-page.component';
import { PoetryDisplayComponent } from './poem-display/poetry-display.component';
import { CommonService } from './services/common.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          PoetryDisplayComponent,
          PoetryHomePageComponent
        ],
        imports: [
          HttpClientModule,
          ReactiveFormsModule,
          FormsModule,
          RouterTestingModule
        ],
        providers: [CommonService, NgForm],
        schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
