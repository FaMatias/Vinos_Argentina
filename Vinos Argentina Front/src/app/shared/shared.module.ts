import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FeatureComponent } from './components/feature/feature.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosycontactoComponent } from './components/nosotrosycontacto/nosotrosycontacto.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    CategoriasComponent,
    FeatureComponent,
    BuscadorComponent,
    NotfoundComponent,
    FooterComponent,
    FooterComponent,
    NosotrosycontactoComponent,
    NosotrosycontactoComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports: [
  NavbarComponent,
  CategoriasComponent,
  FeatureComponent,
  HomeComponent,
  NotfoundComponent,
  FooterComponent
  ]
})
export class SharedModule { }
