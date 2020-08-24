import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component'
import { PostComponent } from './post/post.component'

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'post/:id', component: PostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
