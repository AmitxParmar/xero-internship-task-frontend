export interface IUser {
  _id: string
  email: string
  password: string
  firstname: string
  lastname: string
  userType?: string
  company?: string
  organization?: string
}

export enum UserTypes {
  Developer = "developer",
  Organization = "organization",
  Company = "company",
}
