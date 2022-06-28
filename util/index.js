require("dotenv").config();
// import { TwitterApi } from "twitter-api-v2";
const { TwitterApi } = require("twitter-api-v2");
// Instanciate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

// Tell typescript it's a readonly app
const roClient = twitterClient.readOnly;

async function getTweet() {
  const tweet = await roClient.v2.singleTweet("1541550653243269123", {
    expansions: ["entities.mentions.username", "in_reply_to_user_id"],
  });

  return tweet;
}

module.exports = getTweet;
