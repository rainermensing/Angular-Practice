import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { CommerceComponent } from './commerce/commerce.component'; 
import { AboutComponent } from './about/about.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; //container for headers, titles, or actions.
import { MatIconModule } from '@angular/material/icon'; // makes it easier to use vector-based icons in your app. 
import { MatCardModule } from '@angular/material/card'; //provides a content container for text, photos, and actions in the context of a single subject.
import { MatButtonModule } from '@angular/material/button';//provides a native <button> or <a> element enhanced with Material Design styling and ink ripples.
import { MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBarModule, MatSnackBarConfig } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    NewsapiComponent,
    AboutComponent,
    NewsapiComponent,
    CommerceComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }