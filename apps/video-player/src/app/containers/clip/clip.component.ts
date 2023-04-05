import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipResponseDto } from '@pushit-assignment/common';
import { map, Observable } from 'rxjs';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'pushit-assignment-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss'],
})
export class ClipComponent implements OnInit {
  clip$!: Observable<ClipResponseDto>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.clip$ = this.apiService.getClips({}, this.route.snapshot.params['clipId'])
    .pipe(map((response) => response.clips[0]));
  }
}
