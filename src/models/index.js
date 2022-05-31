// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ClubProfile, Messages, AddFixtures, Teams } = initSchema(schema);

export {
  ClubProfile,
  Messages,
  AddFixtures,
  Teams
};