import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { VideoPlayerComponent } from "./video-player.component";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [VideoPlayerComponent],
    exports: [VideoPlayerComponent],
})
export class VideoPlayerModule {}