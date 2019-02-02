import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'characters', pathMatch: 'full', redirectTo: '/characters' },
  { path: 'monsters', pathMatch: 'full', redirectTo: '/monsters' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
