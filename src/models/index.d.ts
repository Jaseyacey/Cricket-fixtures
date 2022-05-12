import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Teams {
  readonly Teams?: string | null;
  constructor(init: ModelInit<Teams>);
}

type ClubProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ClubProfile {
  readonly id: string;
  readonly club_email?: string | null;
  readonly club_name?: string | null;
  readonly club_number?: string | null;
  readonly club_description?: string | null;
  readonly club_website?: Teams | null;
  readonly club_teams?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClubProfile, ClubProfileMetaData>);
  static copyOf(source: ClubProfile, mutator: (draft: MutableModel<ClubProfile, ClubProfileMetaData>) => MutableModel<ClubProfile, ClubProfileMetaData> | void): ClubProfile;
}