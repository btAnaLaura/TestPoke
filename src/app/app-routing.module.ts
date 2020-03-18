import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonComponent } from './pokemon/pokemon.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {path: '', component: PokemonComponent},
  {path: 'favorite', component: FavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
