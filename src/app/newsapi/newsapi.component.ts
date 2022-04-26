import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../api.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styleUrls: ['./newsapi.component.css']
})
export class NewsapiComponent implements OnInit {

  constructor(private apiService: NewsApiService) { }
  ApiKey: string | null = null;
  KeyExists: boolean = false;
  articles: any;

  
  
  ngOnInit(): void {
    this.ApiKey = `${environment.NewsAPIKey}`;
    this.KeyExists = this.checkKey(this.ApiKey);
    console.log(this.KeyExists)
    this.apiService.getNews(this.ApiKey).subscribe((data)=>{
      this.articles = data['articles'];
    });
  }

  checkKey = (ApiKey:string):boolean =>  {
    return ApiKey !== 'XXX';
  }

}
