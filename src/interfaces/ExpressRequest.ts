import { Request } from 'express';
import LogedUser from './LoggedUser';

//use this interface insted of express.Request
export default interface ExpressRequest extends Request {
  user?: LogedUser;
  requestId: string;
}
