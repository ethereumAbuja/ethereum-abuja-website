//state to track allowance of inputed toke

export enum allowanceState {
  UNKNOWN = "UNKNOWN",
  APPROVED = "APPROVED",
  UNAPPROVED = "UNAPPROVED",
}

//this enum trxType  is basically to detertmine the items to be displayed in the modal after succesfull transactions during donation
export enum trxType {
  APPROVAL = "APPROVAL",
  DONATION = "DONATION",
  UNKNOWN = "UNKNOWN",
}
