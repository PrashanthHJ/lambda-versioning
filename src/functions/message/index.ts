import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'api/v3/message',
      },
    },
  ],
  version: true,
  tags: {
    alias: 'v3',
  },
};
