import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ClipQuery,
  Pagination,
  ClipResponseDto,
} from '@pushit-assignment/common';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private readonly httpClient: HttpClient) {}
getClips(
    query: ClipQuery,
    clipId?: number
  ): Observable<Pagination<ClipResponseDto>> {
    const url = clipId ? `/api/clips/${clipId}` : `/api/clips`;
    return this.httpClient.get<Pagination<ClipResponseDto>>(url, { params: query });
  }
}
