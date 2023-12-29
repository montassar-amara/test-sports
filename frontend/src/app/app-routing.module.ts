import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./main/main.module').then(m=>m.MainModule)
  },
  {
    path:'team/:id',
    loadChildren: ()=>import('./team/team.module').then(m=>m.TeamModule)
  },
  {
    pathMatch:'full',
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
