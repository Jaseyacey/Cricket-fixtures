import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CricketClubMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CricketClub {
  readonly id: string;
  readonly club_name?: string | null;
  readonly club_location?: string | null;
  readonly club_contact?: string | null;
  readonly club_website?: string | null;
  readonly club_email?: string | null;
  readonly club_teams?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CricketClub, CricketClubMetaData>);
  static copyOf(source: CricketClub, mutator: (draft: MutableModel<CricketClub, CricketClubMetaData>) => MutableModel<CricketClub, CricketClubMetaData> | void): CricketClub;
}