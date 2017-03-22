import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
import { FeedbackModule } from './feedback/feedback.module';
import { FeelingModule } from './feeling/feeling.module';
import { TribeModule } from './tribe/tribe.module';
import { WelcomeModule } from './welcome/welcome.module';
import { SharedModule } from './shared/shared.module';
import { SegmentationModule } from './segmentation/segmentation.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    ContactModule,
    FeedbackModule,
    FeelingModule,
    TribeModule,
    WelcomeModule,
    SegmentationModule,
    SharedModule,


    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
