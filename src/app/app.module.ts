import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { About2Component } from './about2/about2.component';
import { DividerComponent } from './divider/divider.component';
import { ServiceComponent } from './service/service.component';
import { SkillsComponent } from './skills/skills.component';
import { About3Component } from './about3/about3.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { Divider2Component } from './divider2/divider2.component';
import { Divider3Component } from './divider3/divider3.component';
import { FinaldivComponent } from './finaldiv/finaldiv.component';
import { ConnectionService } from './connection.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    DashboardComponent,
    AboutComponent,
    About2Component,
    DividerComponent,
    ServiceComponent,
    SkillsComponent,
    About3Component,
    WorksComponent,
    ContactComponent,
    Divider2Component,
    Divider3Component,
    FinaldivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
