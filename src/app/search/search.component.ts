import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

@Injectable()
export class SearchComponent {
  input = "";
  results = [];
  bookmarks = [];

  constructor(public http: HttpClient) {}

  searchShows() {
    console.log('Searching shows...');

    this.http.get(`http://www.omdbapi.com/?i=tt3896198&apikey=f14b9acd&s=${this.input}`)
    .subscribe( (data) => {
      this.results = data.Search;
      console.log(this.results);
    });
  }

  addBookmark(i) {
    console.log('Adding to bookmarks...');

    this.bookmarks.push(this.results[i]);
    console.log(this.bookmarks);
  }
}