// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Messages, AddFixtures, ClubProfile, Teams } = initSchema(schema);

export {
  Messages,
  AddFixtures,
  ClubProfile,
  Teams
};