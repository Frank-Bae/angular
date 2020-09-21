import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './http-list/list/list.component';
import { ListIdComponent } from './http-list/list-id/list-id.component'

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'post/:id', component: ListIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
