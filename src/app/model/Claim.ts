import { User } from './User';
export class Claim {
    claimId: number;
    user: User;
    status: String;
    otherDriverLicense: String;
    carModel: String;
    carMake: String;
    dateOfIncident: String;
    description: String;
}

