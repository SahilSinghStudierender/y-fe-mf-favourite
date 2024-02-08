import { Component } from '@angular/core';
import {LocalstorageService} from "../../../service/localstorage.service";
import {PostDto} from "../../../models/post-dto";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  favouritePosts: PostDto[] = [];
  constructor(private localstorageService: LocalstorageService) {
    this.favouritePosts = localstorageService.getPosts();
  }
}
