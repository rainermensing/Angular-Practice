import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { CommerceComponent } from './commerce/commerce.component';
import { AboutComponent } from './about/about.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';


const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'newsapi', component: NewsapiComponent },
  { path: 'commerce', component: CommerceComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }