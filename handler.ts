import * as dotenv from 'dotenv';

import MastodonPoster from './src/functions/post';

dotenv.config();

export async function postMostPlayedArtists(): Promise<void> {
  console.log({ process: process.env });
  const Tweet = new MastodonPoster({
    username: process.env.LASTFM_USER_NAME,
    lastFM: {
      apiKey: process.env.LASTFM_TOKEN,
      apiSecret: process.env.LASTFM_SECRET,
    },
    mastodon: {
      access_token: process.env.MASTODON_ACCESS_TOKEN,
      api_url: process.env.MASTODON_API_URL,
    },
  });

  return await Tweet.run(6, '7day');
}
