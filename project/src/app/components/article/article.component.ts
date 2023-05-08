import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from './article.service';
import { Article } from './article.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[] = [];
  modo?: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articuloService: ArticleService

  ) { }
  ngOnInit(): void {

    this.params();
    this.RestArticles();
  }

  private RestArticles() {
   this.articuloService.RestArticles().subscribe(
    (data) => {
      data.forEach((article) => {
        const articleIn: Article = new Article(article.imagen);
        this.articles.push(articleIn);
      })
    }
   );
  }

  private obtenerArticles() {
    this.articles = this.articuloService.obtenerArticles();
  }

  public params(): void {
    this.modo = (this.route.snapshot.queryParamMap.get("modo") ?? undefined);



  }

  public navegar(idArticulo: number): void {
    this.router.navigate(['article', idArticulo])
  }
}
