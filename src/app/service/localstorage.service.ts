import { Injectable } from '@angular/core';
import {PostDto} from "../models/post-dto";

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  private localStorageKey = "favourite_posts";

  getPosts(): PostDto[] {
    const postsJSON = localStorage.getItem(this.localStorageKey);
    if (postsJSON) {
      return JSON.parse(postsJSON);
    }
    return [];
  }
}
