import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { EducationAndSkillsComponent } from './education-and-skills/education-and-skills.component';
import { SocialsAndInterestComponent } from './socials-and-interest/socials-and-interest.component';
import { ProjectImageSliderComponent } from './project-image-slider/project-image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    EducationAndSkillsComponent,
    SocialsAndInterestComponent,
    ProjectImageSliderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
