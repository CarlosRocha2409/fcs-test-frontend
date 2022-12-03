export interface IRegularPayload {
  name: string;
  url: string;
}

export type ICharacterStatus = "alive" | "dead" | "unknow";
export type ICharacterGender = "female" | "male" | "genderless " | "unknow";

export interface ICharacter {
  id: number;
  name: string;
  status: ICharacterStatus;
  species: string;
  type: string;
  gender: ICharacterGender;
  origin: IRegularPayload;
  location: IRegularPayload;
  image: string;
  episode: string;
  url: string;
  created: string;
}
