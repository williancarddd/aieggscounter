import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { ENV } from '../constants/constants';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const token = this.extractTokenFromHeader(req);
    if (!token) {
      return res.status(401).send('Invalid Request');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: ENV.JWT_SECRET,
      });
      req.user_payload = payload;
    } catch {
      return res.status(401).send('Invalid Token');
    }
    next();
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
