import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Teams {
  readonly Teams?: string | null;
  constructor(init: ModelInit<Teams>);
}

type MessagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddFixturesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Messages {
  readonly id: string;
  readonly userMessages?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Messages, MessagesMetaData>);
  static copyOf(source: Messages, mutator: (draft: MutableModel<Messages, MessagesMetaData>) => MutableModel<Messages, MessagesMetaData> | void): Messages;
}

export declare class AddFixtures {
  readonly id: string;
  readonly home_team?: string | null;
  readonly away_team?: string | null;
  readonly fixture_date?: string | null;
  readonly fixture_time?: string | null;
  readonly fixture_location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AddFixtures, AddFixturesMetaData>);
  static copyOf(source: AddFixtures, mutator: (draft: MutableModel<AddFixtures, AddFixturesMetaData>) => MutableModel<AddFixtures, AddFixturesMetaData> | void): AddFixtures;
}

export declare class ClubProfile {
  readonly id: string;
  readonly club_email?: string | null;
  readonly club_name?: string | null;
  readonly club_number?: string | null;
  readonly club_description?: string | null;
  readonly club_website?: string | null;
  readonly club_teams?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClubProfile, ClubProfileMetaData>);
  static copyOf(source: ClubProfile, mutator: (draft: MutableModel<ClubProfile, ClubProfileMetaData>) => MutableModel<ClubProfile, ClubProfileMetaData> | void): ClubProfile;
}