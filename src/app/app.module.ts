import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookmarkService } from './bookmark.service';
import { RouterModule, Routes} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    // DEFAULT PATHING
    path: "",
    redirectTo: "/search",
    pathMatch: "full"
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "bookmarks",
    component: BookmarkComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    SearchComponent,
    NavbarComponent,
    BookmarkService
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }