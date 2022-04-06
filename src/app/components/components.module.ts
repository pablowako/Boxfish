import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class ComponentsModule { }
