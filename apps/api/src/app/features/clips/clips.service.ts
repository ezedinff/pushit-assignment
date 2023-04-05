import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClipQuery } from '@pushit-assignment/common';
import { lastValueFrom, map } from 'rxjs';

type ClipApiRequest = {
    marAuth: string,
    sessionID: string,
    clipId?: number,
    
} & ClipQuery

@Injectable()
export class ClipsService {
  headers!: { [key: string]: string};
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) {
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }

  async getFromApi(body: ClipApiRequest) {
    const response = await lastValueFrom(
      this.httpService
        .post(this.configService.get('CLIPS_API_URL'), body, this.headers)
        .pipe(map((response) => response.data))
    );
    return response;
  }

  getClip(clipId: number) {
    const body: ClipApiRequest = {
        clipId,
        marAuth: this.configService.get('MAR_AUTH'),
        sessionID: this.configService.get('SESSION_ID'),
    }
    return this.getFromApi(body);
  }

  getClips(query: ClipQuery) {
    console.log(query);
    const body: ClipApiRequest = {
        marAuth: '5344333591ebe3c10594e1abf146b309',
        sessionID: '399003',
        sortBy: 'date',
        sortDirection: query?.sortDirection || 'desc',
        page: query?.page || 1,
        limit: query?.limit ? Math.min(query?.limit, 10) : 10,
    }
    return this.getFromApi(body);
  }
}
