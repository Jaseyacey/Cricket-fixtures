// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ClubProfile, Teams } = initSchema(schema);

export {
  ClubProfile,
  Teams
};