import { APIGatewayEvent, Context } from 'aws-lambda';

import snoowrap from 'snoowrap';

// Pretty good guide to get started with using reddit API
// https://medium.com/geekculture/utilizing-reddits-api-8d9f6933e192

exports.handler = async (event: APIGatewayEvent, context: Context) => {
  const query = event.queryStringParameters?.q || '';

  const r = new snoowrap({
    userAgent: 'SubSearch',
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    username: process.env.username,
    password: process.env.password,
  });

  const subreddits = await r.searchSubredditNames({
    query,
  });

  // Matches opensearch format
  // Example from Wikipedia: https://en.wikipedia.org/w/api.php?action=opensearch&search=example

  const response = [
    query,
    subreddits,
    subreddits.map((_) => ''),
    subreddits.map((sub) => `https://www.reddit.com/r/${sub}`),
  ];

  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(response),
  };
};
