import exampleService from '../services/example.service';

import { Controller, Get, Path, Post, Route } from 'tsoa';
import { IUser } from '../models/user.model';

@Route('users')
export class ExampleController extends Controller {
  /**
   * Here is the description of what does this endpoint do
   */
  @Get('all')
  public async getUsers(): Promise<IUser[]> {
    return await exampleService.getAllUser();
  }

  @Get('one/{userId}')
  public async getOne(@Path() userId: number): Promise<IUser | null> {
    return await exampleService.findOne(userId);
  }

  @Post('login')
  public async login() {
    return 0;
  }
}
