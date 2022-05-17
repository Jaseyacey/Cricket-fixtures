// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AddFixtures, ClubProfile, Teams } = initSchema(schema);

export {
  AddFixtures,
  ClubProfile,
  Teams
};