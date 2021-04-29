export interface youtubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export default interface youtubePlaylistItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: youtubeThumbnail;
      medium: youtubeThumbnail;
      high: youtubeThumbnail;
      standard: youtubeThumbnail;
    };
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
  };
}
