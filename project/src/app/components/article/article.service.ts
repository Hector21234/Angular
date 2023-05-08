import { Injectable } from "@angular/core";
import { Article } from "./article.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IArticle } from "./article.interface";
@Injectable({

    providedIn: 'root'
})

export class ArticleService{
constructor(
    private http: HttpClient
) { }

public obtenerArticles():Article[]{

    const articlereturn: Article[] = [];
    const article1: Article = new Article("2");
    articlereturn.push(article1);
    return articlereturn;
  }

public RestArticles(): Observable<IArticle[]>{
const url: string = "http://localhost:3001/uno";
return this.http.get<IArticle[]>(url);

}
}