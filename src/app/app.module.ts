import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonService } from './services/common.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { PoetryHomePageComponent } from './poetry-home-page/poetry-home-page.component';
import { PoetryDisplayComponent } from './poem-display/poetry-display.component';

const appRoutes: Routes = [
  { path: 'searchAuthorWithTitle', component: PoetryDisplayComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PoetryDisplayComponent,
    PoetryHomePageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CommonService, NgForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
