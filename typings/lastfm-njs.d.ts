declare module 'lastfm-njs' {
  interface LastFMConstructorOptions {
    apiKey: string;
    apiSecret: string;
  }
  export type LastFmTimePeriod = 'overall' | '7day' | '1month' | '3month' | '6month' | '12month';
  export type LastFmImageSize = 'small' | 'medium' | 'large' | 'extralarge' | 'mega';
  export interface LastFmImage {
    size: LastFmImage;
    '#text': string;
  }
  export interface LastFmArtist {
    mbid: string;
    streamable: string;
    name: string;
    playcount: string;
    url: string;
    '@attr': { rank: string };
    image: LastFmImage[];
  }

  export default class LastFM {
    constructor(props: LastFMConstructorOptions);
    user_getTopArtists(data: { user: string; limit: number; period: LastFmTimePeriod }): Promise<{
      artist: LastFmArtist[];
    }>;
  }
}
