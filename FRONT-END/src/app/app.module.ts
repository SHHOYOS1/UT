import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
  import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    AcercaComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  NgCircleProgressModule.forRoot({  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
