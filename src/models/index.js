// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ClubsProfile, Messages, AddFixtures } = initSchema(schema);

export {
  ClubsProfile,
  Messages,
  AddFixtures
};