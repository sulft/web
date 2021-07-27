import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { PreviewArticleComponent } from './article/preview-article/preview-article.component';
import { ChoosingArticleComponent } from './article/edit-article/choosing-article/choosing-article.component';
import { ManagingArticleComponent } from './article/edit-article/managing-article/managing-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    EditArticleComponent,
    PreviewArticleComponent,
    ChoosingArticleComponent,
    ManagingArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
