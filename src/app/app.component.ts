import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Posts';

  posts = [
          new Post(
            'Mon premier post',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            1),
          new Post(
            'Mon deuxième post',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            0),
          new Post(
            'Mon troisième post',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            -1 )
  ];

}
