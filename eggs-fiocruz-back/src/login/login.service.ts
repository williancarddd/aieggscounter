import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/common/databases/prisma-module/prisma.service';
import { AuthLoginDto } from './dto/create-login.dto';
import { RecoverLoginDto } from './dto/update-login.dto';
import { ENV } from 'src/common/constants/constants';
import { compare, generateHash } from 'src/utils/crypto';

@Injectable()
export class LoginService {
  constructor(private readonly prisma: PrismaService) {}
  async authUser(authData: AuthLoginDto) {
    const { email, password } = authData;
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new Error('Email incorreto ou a senha.');
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email incorreto ou a senha.');
    }
    const access_token = jwt.sign({ user }, ENV.JWT_SECRET, {
      expiresIn: '1d',
    });
    const responseUser = {
      email,
      user_id: user.id,
      f_name: user.f_name,
      l_name: user.l_name,
      access_token,
    };
    return responseUser;
  }

  async changePassword(recoverData: RecoverLoginDto) {
    const { email, new_password, password } = recoverData;
    const auth = await this.authUser({
      email,
      password: password,
    });
    if (!auth) {
      throw new Error('Email incorreto ou a senha.');
    }
    await this.prisma.user.update({
      where: { email: email },
      data: {
        password: await generateHash(new_password),
      },
    });
    return true;
  }
}
