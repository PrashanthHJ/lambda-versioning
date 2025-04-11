import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'api/v1/message',
      },
    },
  ],
  version: true,
  tags: {
    alias: 'v1',
  },
};
