import {
  Body,
  Controller,
  Get,
  Request,
  Post,
  Route,
  Response,
  Security,
} from 'tsoa';
import Roles from '../enums/Roles';
import SecurityNames from '../enums/SecurityNames';
import ExpressRequest from '../interfaces/ExpressRequest';
import { ErrorResponse } from '../interfaces/Response';

import authService, { LoginParams } from '../services/auth.service';

@Route('auth')
export class AuthController extends Controller {
  /**
   * Here is the description of what does this endpoint do
   */
  @Post('login')
  @Response<ErrorResponse>(401, 'Auth fail')
  public async login(@Body() body: LoginParams) {
    return authService.login(body);
  }

  @Security(SecurityNames.JWT, [Roles.ADMIN])
  @Get('me')
  @Response<ErrorResponse>(401, 'Auth fail')
  public async me(@Request() req: ExpressRequest) {
    if (req.user) return authService.getMe(req.user);

    return null;
  }
}
