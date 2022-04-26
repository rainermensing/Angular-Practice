import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICommerce } from './commerce/models/commerce';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  //API_KEY  = `${environment.NewsAPIKey}`;
  constructor(private httpClient: HttpClient) { }
    
  public getNews(API_KEY:string){
    console.log("Getting Data");
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CommerceApiService {
  amount  = 100;
  constructor(private httpClient: HttpClient) { }
    
  public getPromos():  Observable<ICommerce> {
    console.log("Getting Data");
    return this.httpClient.get<ICommerce>(`https://random-data-api.com/api/commerce/random_commerce?size=${this.amount}`);
    
  }
}
