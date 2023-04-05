import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { ClipsService } from './clips.service';
import {
  ClipQuery,
  ClipResponseDto,
  Pagination,
} from '@pushit-assignment/common';

@Controller('clips')
export class ClipsController {
  constructor(private readonly clipsService: ClipsService) {}

  @Get()
  async getClips(
    @Query() query: ClipQuery
  ): Promise<Pagination<ClipResponseDto>> {
    return this.clipsService.getClips(query);
  }

  @Get(':clipId')
  async getClip(
    @Param('clipId') clipId: number
  ): Promise<Pagination<ClipResponseDto>> {
    console.log(clipId);
    return this.clipsService.getClip(clipId);
  }
}
