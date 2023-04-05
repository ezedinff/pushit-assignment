import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "../../components/header/header.module";
import { PushitListModule } from "../../components/pushit-list/pushit-list.module";
import { VideoPlayerModule } from "../../components/video-player/video-player.module";
import { ClipsComponent } from "./clips.component";

@NgModule({
    declarations: [ClipsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ClipsComponent },
        ]),
        VideoPlayerModule,
        PushitListModule
    ],
})
export class ClipsModule {}