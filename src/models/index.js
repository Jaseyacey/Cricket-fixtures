// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ClubProfile } = initSchema(schema);

export {
  ClubProfile
};