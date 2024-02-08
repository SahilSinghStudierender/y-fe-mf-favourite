import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import {defaultPost, PostDto} from "../../../models/post-dto";

@Component({
    selector: "app-post-overview",
    templateUrl: "./post-overview.component.html",
    styleUrls: ["./post-overview.component.scss"]
})
export class PostOverviewComponent {

    onHover = false;
  @Input() post: PostDto = defaultPost;

  constructor(private router: Router, public sanitizer: DomSanitizer) {
  }
  public postClicked() {
      this.router.navigate(["/post", this.post.id]).then();
  }
}
