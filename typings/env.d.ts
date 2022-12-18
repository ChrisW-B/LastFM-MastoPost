declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MASTODON_ACCESS_TOKEN: string;
      MASTODON_API_URL: string;

      LASTFM_TOKEN: string;
      LASTFM_SECRET: string;
      LASTFM_USER_NAME: string;
    }
  }
}

export {};
