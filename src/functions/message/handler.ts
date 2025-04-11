import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';


const message = async () => {
  const version = process.env.VERSION_PBT;

  return formatJSONResponse({
    message: `Hello ${version}!`
  });
};

export const main = middyfy(message);
