import IPlayer from "./player";

export default interface ITeam{
  _id:string;
  name:string;
  thumbnail:string;
  players:IPlayer[];
}
