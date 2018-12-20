export class User {
  // private id: any;
  public email: any = '';
  public password: any = '';
  public type: any = '';
  public fname: any = '';
  public lname: any = '';
  public phone: any = '';
  public address: any = '';
  public policyNo: any = '';
  public status: any = 'Active';

  constructor(email?, password?, type?, fname?, lname?, phone?, address?, policyNo?) {
    this.email = email;
    this.password = password;
    this.type = type;
    this.fname = fname;
    this.lname = lname;
    this.phone = phone;
    this.address = address;
    this.policyNo = policyNo;
  }
}
