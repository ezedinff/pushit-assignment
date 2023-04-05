export type Pagination<T> = {
  clips: T[];
  result: number;
  totalrows: number;
  rows: number;
}

export type ClipResponseDto = {
    clipId: number;
    clipName: string;
    clipURL: string;
    clipThumb: string;
    faved: boolean;
    claimed: boolean;
    siteName: string;
    clipDate: string;
    clipTitle: string;
    tags: string;
}