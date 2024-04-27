/**
 * This enum __{@link allowanceState}__ state to track allowance of inputed token
 *
 */
export enum allowanceState {
  UNKNOWN = "UNKNOWN",
  APPROVED = "APPROVED",
  UNAPPROVED = "UNAPPROVED",
}

/**
 * This enum __{@link trxType}__ is basically to detertmine the items to be displayed in
 *
 * the modal after succesfull transactions during donation
 */
export enum trxType {
  APPROVAL = "APPROVAL",
  DONATION = "DONATION",
  UNKNOWN = "UNKNOWN",
}
