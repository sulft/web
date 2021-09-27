import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  posts:Object = [
    {
      'title':'Premier post',
      'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed erat lorem. Proin tempus sapien magna, fermentum lobortis mauris lobortis at. Nullam posuere pharetra nulla, vel accumsan est pellentesque et.',
      'loveIts':12,
      'create_at':new Date()
    },
    {
      'title':'Second post',
      'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed erat lorem. Proin tempus sapien magna, fermentum lobortis mauris lobortis at. Nullam posuere pharetra nulla, vel accumsan est pellentesque et.',
      'loveIts':-3,
      'create_at':new Date()
    },
    {
      'title':'Troisième post',
      'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed erat lorem. Proin tempus sapien magna, fermentum lobortis mauris lobortis at. Nullam posuere pharetra nulla, vel accumsan est pellentesque et.',
      'loveIts':16,
      'create_at':new Date()
    }
  ]
}
