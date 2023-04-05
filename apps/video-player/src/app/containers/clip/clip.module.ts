import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipComponent } from './clip.component';
import { RouterModule } from '@angular/router';
import { VideoPlayerModule } from '../../components/video-player/video-player.module';

@NgModule({
  declarations: [ClipComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ClipComponent },
    ]),
    VideoPlayerModule
  ],
})
export class ClipModule {}
