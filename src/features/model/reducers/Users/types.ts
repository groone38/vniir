export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  email: string;
  image: string;
  birthDate: string;
}

export interface Auth {
  login: string;
  password: string;
}
