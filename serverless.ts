import type { AWS } from '@serverless/typescript';

import message from '@functions/message';

import * as dotenv from 'dotenv';

dotenv.config();

const serverlessConfiguration: AWS = {
  service: 'lambda-versioning',
  frameworkVersion: '3',
  plugins: ['serverless-dotenv-plugin', 'serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      VERSION: process.env.VERSION_PBT,
    },
    versionFunctions: true,
  },
  // import the function via paths
  functions: {
    message
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node20',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    useDotenv: true,
  },
};

module.exports = serverlessConfiguration;
