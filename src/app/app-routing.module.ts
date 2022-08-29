import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommentsComponent } from './comments/comments.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'resume', component: TestingComponent },
  { path: 'rate/:id', component: CommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
