import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

    // allows binding on data from outside
    @Input() posts: Post[] = [];


    constructor(public postsService: PostsService) {

    }

    ngOnInit() {

    }

}
