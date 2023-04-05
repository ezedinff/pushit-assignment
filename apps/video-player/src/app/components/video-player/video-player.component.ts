import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ClipResponseDto } from '@pushit-assignment/common';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'pushit-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isPlaying = false;
  @Input() clip!: ClipResponseDto | null;

  ngAfterViewInit(): void {
    const videoPlayer = this.videoPlayer.nativeElement as HTMLVideoElement;
    videoPlayer.load(); // Start loading the video
  }

  playVideo(): void {
    const videoPlayer = this.videoPlayer.nativeElement as HTMLVideoElement;
    videoPlayer.play(); // Start playing the video
    interval(1000)
    .pipe(takeWhile(() => !this.isPlaying))
    .subscribe(() => {
      this.isPlaying = !this.videoPlayer.nativeElement.paused;
      if(!this.isPlaying) {
        this.videoPlayer.nativeElement.play();
      }
    });
  }
}
