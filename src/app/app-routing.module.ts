import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import {WorksComponent} from './works/works.component';
import {ContactComponent} from './contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'home', component: SlideshowComponent },
    { path: 'about', component: AboutComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'explore', component: WorksComponent },
    { path: 'contact', component: ContactComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
