import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CommonService } from '../services/common.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { PoetryHomePageComponent } from './poetry-home-page.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { async, of } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { PoetryDisplayComponent } from '../poem-display/poetry-display.component';

describe('PoetryHomePageComponent', () => {
  let component: PoetryHomePageComponent;
  let commonService;
  let form;
  let fixture: ComponentFixture<PoetryHomePageComponent>;
  const appRoutes: Routes = [
    { path: 'searchAuthorWithTitle', component: PoetryDisplayComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoetryHomePageComponent ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
      ],
      providers: [CommonService, NgForm],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(inject([CommonService], s => {
    commonService = s;
    fixture = TestBed.createComponent(PoetryHomePageComponent);
    const response: any[] = [];
    spyOn(commonService, 'getAuthors').and.returnValue(of(response));
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterEvent', () => {
    const response: any[] = [];
    const event = {
      target: {
        value: 'William Shakespeare'
      }
    };
    spyOn(commonService, 'getTitles').and.returnValue(of(response));
    component.filterTitle(event);
    fixture.detectChanges();

    expect(component.autoCompleteTitles).toEqual(response);
  });

  it('should call searchAuthorWithTitles', () => {
    let response = [];
    response = [
      {
        title: 'A POISON TREE',
        author: 'William Blake',
        lines: [
          'I was angry with my friend:',
          'I told my wrath, my wrath did end.',
          'I was angry with my foe:',
          'I told it not, my wrath did grow.',
          '',
          'And I watered it in fears',
          'Night and morning with my tears,',
          'And I sunned it with smiles',
          'And with soft deceitful wiles.',
          '',
          'And it grew both day and night,',
          'Till it bore an apple bright,',
          'And my foe beheld it shine,',
          'and he knew that it was mine,--',
          '',
          'And into my garden stole',
          'When the night had veiled the pole;',
          'In the morning, glad, I see',
          'My foe outstretched beneath the tree.'
        ],
        linecount: '16'
      }
    ];
    spyOn(commonService, 'getAuthorWithTitles').and.returnValue(of(response));
    form = component.ngForm.form;
    component.searchAuthorWithTitles(form);
    expect(component.authorWithTitles).toEqual(response);
  });
});
