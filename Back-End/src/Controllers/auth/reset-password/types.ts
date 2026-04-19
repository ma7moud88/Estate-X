import { Type } from "@angular/core";

export interface IRequestResetPassword {
    password: string;
}

export type IParamsResetPassword = {
    token: string;
}
export interface DecodedToken {
  id: string;
  email: string;
}
