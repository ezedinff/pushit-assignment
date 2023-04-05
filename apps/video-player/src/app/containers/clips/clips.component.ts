import { Component, OnInit } from '@angular/core';
import { ClipQuery, ClipResponseDto } from '@pushit-assignment/common';
import { lastValueFrom, map } from 'rxjs';
import { ApiService } from '../../api/api.service';



@Component({
  selector: 'pushit-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss'],
})
export class ClipsComponent implements OnInit {
  selectedClip!: ClipResponseDto | null;
  clips!: ClipResponseDto[];
  pagination: ClipQuery = { page: 1, limit: 6 };
  constructor(private readonly apiService: ApiService) {}
  async ngOnInit() {
    this.clips = await lastValueFrom(
      this.apiService.getClips({
        page: this.pagination.page,
        limit: this.pagination.limit,
      }).pipe(map((response) => response.clips))
    );
    this.selectedClip = this.clips[0];
    this.clips = this.clips.slice(1);
  }
  selectClip(clip: any) {
    console.log(clip);
    if (this.selectedClip && this.clips) {
      this.clips = [...this.clips, this.selectedClip];
      this.selectedClip = { ...clip };
      this.clips = this.clips.filter((c) => c.clipId !== clip.clipId);
    }
  }
  async loadMore(): Promise<void> {
    if (!this.pagination.page) return;
    this.pagination.page += 1;
    const newClips = await lastValueFrom(
      this.apiService.getClips({ page: this.pagination.page, limit: this.pagination.limit })
    );
    this.clips = [...this.clips, ...newClips.clips];
  }
}
