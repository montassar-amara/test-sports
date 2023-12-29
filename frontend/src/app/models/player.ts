export default interface IPlayer{
  _id:string;
  name:string;
  position:string;
  thumbnail:string;
  singin:{
    amount:number;
    currency:string;
  };
  born:Date;
}
