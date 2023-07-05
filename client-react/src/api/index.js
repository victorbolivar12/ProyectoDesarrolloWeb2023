import { request } from "./base";
import { Auth, User } from "./services";

request.auth = Auth;
request.users = User;

export { request };
