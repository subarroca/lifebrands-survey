import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
import { FeedbackModule } from './feedback/feedback.module';
import { FeelingModule } from './feeling/feeling.module';
import { TribeModule } from './tribe/tribe.module';
import { WelcomeModule } from './welcome/welcome.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule,
    ContactModule,
    FeedbackModule,
    FeelingModule,
    TribeModule,
    WelcomeModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
