import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadPosts = [];

  constructor(private http: HttpClient) {}
  title = 'angular-http-requests';
  inputTitle: string = '';
  content: string = '';
  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: { inputTitle: string; content: string }) {
    //send HTTP request
    this.http
      .post(
        'https://angular-http-requests-e8429-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    //send HTTP request
    this.fetchPosts();
  }

  private fetchPosts() {
    this.http
      .get(
        'https://angular-http-requests-e8429-default-rtdb.firebaseio.com/posts.json'
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }
}
