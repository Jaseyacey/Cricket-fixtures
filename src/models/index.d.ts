import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ClubsProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AddFixturesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ClubsProfile {
  readonly id: string;
  readonly club_description: string;
  readonly club_email: string;
  readonly club_name: string;
  readonly club_website: string;
  readonly club_teams?: string[] | null;
  readonly club_number: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClubsProfile, ClubsProfileMetaData>);
  static copyOf(source: ClubsProfile, mutator: (draft: MutableModel<ClubsProfile, ClubsProfileMetaData>) => MutableModel<ClubsProfile, ClubsProfileMetaData> | void): ClubsProfile;
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