import 'source-map-support/register';
import { AppLogger } from '../../common/logger';
import { AppDynamoDb } from '../../common/dynamodb';
import { lambdaResponse } from '../../common/utils';

const appLogger = new AppLogger();
const appDocClient = new AppDynamoDb();

export const handler = async (event) => {
    appLogger.info('Incoming event', event);
    return lambdaResponse(200, { status: true });
};
