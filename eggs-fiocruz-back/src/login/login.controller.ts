import { Controller, Post, Body, Res, Put } from '@nestjs/common';
import { LoginService } from './login.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthLoginDto } from './dto/create-login.dto';
import { RecoverLoginDto } from './dto/update-login.dto';

@Controller('fiocruz/login')
@ApiTags('Login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiBody({ type: AuthLoginDto })
  async auth(@Body() authData: AuthLoginDto, @Res() response: Response) {
    try {
      const loginResponse = await this.loginService.authUser(authData);
      response.status(200).json({ user: loginResponse });
    } catch (e) {
      response.status(400).json({ error: e.message });
    }
  }

  @Put('change-password')
  @ApiBody({ type: RecoverLoginDto })
  async change_pass(
    @Body() recoverData: RecoverLoginDto,
    @Res() response: Response,
  ) {
    try {
      await this.loginService.changePassword(recoverData);
      response.status(200).json({ success: 'password changed' });
    } catch (e) {
      response.status(400).json({ error: e.message });
    }
  }
}
