import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { Article2Component } from './components/article2/article2.component';
const routes: Routes = [{path:'', component: Article2Component},
{path: 'tienda', component: ArticleComponent},{path: 'home', component: Article2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
