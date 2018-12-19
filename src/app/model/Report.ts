import { Claim } from './Claim';

export class Report{
    public reportId:any='';
    public claim:Claim;
    //public policyNo:any='';
    public insuredEmail:any='';
    public claimOfficer:any='';
    public inspectOfficer:any='';
    public insuredPhone:any='';
    public estimate:any='';
    public evaluation:any='';

    constructor(reportId?,claim?,insuredEmail?,claimOfficer?,inspectOfficer?,insuredPhone?,estimate?,evaluation?){
        this.reportId=reportId;
        this.claim=claim;
        //this.policyNo=policyNo;
        this.insuredEmail=insuredEmail;
        this.claimOfficer=claimOfficer;
        this.inspectOfficer=inspectOfficer;
        this.insuredPhone=insuredPhone;
        this.estimate=estimate;
        this.evaluation=evaluation;
    }
}
