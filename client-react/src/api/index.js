import { request } from "./base";
import { Auth } from "./services";

request.auth = Auth;

export { request };
