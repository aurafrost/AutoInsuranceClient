import { Claim } from './Claim';

export class Report {
    reportId: number;
    claim: Claim;
    insuredEmail: String;
    claimOfficer: String;
    inspectOfficer: String;
    insuredPhone: String;
}
