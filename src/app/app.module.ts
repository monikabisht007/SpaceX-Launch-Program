import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RocketLaunchComponent } from './rocket-launch/rocket-launch.component';
import { CommonService } from './services/common.service';

const appRoutes: Routes = [
  { path: 'filter/:type', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RocketLaunchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
