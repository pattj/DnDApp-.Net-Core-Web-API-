import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '../characters/characters.component';
import { RaceSelectorComponent } from '../character-creator/race-selector/race-selector.component'

const routes: Routes = [
    { path: 'characters', pathMatch: 'full', component: CharactersComponent },
    { path: 'charactercreator', pathMatch: 'full', component: RaceSelectorComponent },
  // { //path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CharacterRoutingModule { }
