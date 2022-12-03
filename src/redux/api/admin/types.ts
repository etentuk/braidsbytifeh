export interface IAdminUser {
  name: string;
  email: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IAdminUserState {
  adminUser: IAdminUser | null;
}
