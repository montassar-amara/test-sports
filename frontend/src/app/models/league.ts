import ITeam from "./team";

export default interface ILeague{
  _id:string;
  name:string;
  sport:string;
  teams:ITeam[];
}
