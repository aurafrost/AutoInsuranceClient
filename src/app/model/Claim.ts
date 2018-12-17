import { User } from "../model/User";
export class Claim{
    claimId:number;
    user:User;
    status:String;
    otherDriverLicense:String;
    carModel:String;
    carMake:String;
    dateOfIncident:String;
    description:String;
    estimateCostRepairs:number;
}