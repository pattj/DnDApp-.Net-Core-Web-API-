import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '../characters/characters.component';

const routes: Routes = [
  { path: 'characters', pathMatch: 'full', component: CharactersComponent },
  // { //path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CharacterRoutingModule { }
