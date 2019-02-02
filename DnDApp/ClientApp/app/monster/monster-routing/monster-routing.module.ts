import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstersComponent } from '../monsters/monsters.component';

const routes: Routes = [
  { path: 'monsters', pathMatch: 'full', component: MonstersComponent },
  // { //path: '**', pathMatch: 'full', redirectTo: '/customers' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterRoutingModule { }
