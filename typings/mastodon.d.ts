declare module 'mastodon' {
  interface MastodonConstructorOptions {
    access_token: string;
    api_url: string;
  }
  export default class LastFM {
    constructor(props: MastodonConstructorOptions);
    post(
      path: 'statuses',
      params: {
        status: string;
        media_ids?: string[];
        sensitive?: boolean;
        spoiler_text?: string;
        visibility: 'public' | 'unlisted' | 'private' | 'direct';
      },
    ): Promise<{
      data: Record<string, string>;
      err?: string;
      response?: string;
    }>;
    post(
      path: string,
      params: Record<string, string>,
    ): Promise<{
      data: Record<string, string>;
      err?: string;
      response?: string;
    }>;
  }
}
