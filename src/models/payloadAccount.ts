export interface PayloadAccount {
  username: string;
  password: string;
}
export interface PayloadRegister {
  name: string;
  email: string;
  password: string;
  recaptcha_response: string;
}
