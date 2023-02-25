import { NgModule } from '@angular/core';
import { GitHubService } from '../core';
import { SharedModule } from '../shared';
import { GithubRoutingModule } from './github-routing.module';
import { RepoListComponent } from './pages';


@NgModule({
  declarations: [
    RepoListComponent
  ],
  imports: [
    GithubRoutingModule,
    SharedModule
  ],
  providers: [GitHubService],
})
export class GithubModule { }
