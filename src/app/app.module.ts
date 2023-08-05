import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DigitalAgencyComponent } from './components/digital-agency/digital-agency.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { OurWorksComponent } from './components/our-works/our-works.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { BlogComponent } from './components/blog/blog.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DigitalAgencyComponent,
    WhatWeDoComponent,
    OurWorksComponent,
    TestimonialsComponent,
    OurTeamComponent,
    BlogComponent,
    ClientsComponent,
    ContactUsComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
