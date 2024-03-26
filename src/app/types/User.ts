export interface User{
    _id?:string,
    username?:string,
    email?:string,
    password?:string;
    repeatPassword?:string,
    accessToken?:string
}