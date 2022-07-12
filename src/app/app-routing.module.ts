import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

/* LA home siempre primero, y el 404 siempre al final */
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
