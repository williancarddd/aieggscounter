import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { PrismaModule } from './common/databases/prisma.module';
import { JwtService } from '@nestjs/jwt';
import { AuthMiddleware } from './common/middlewares/auth.middleware';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, LoginModule, UsersModule],
  controllers: [],
  providers: [JwtService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    return consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'fiocruz/login', method: RequestMethod.POST },
        { path: 'fiocruz/users', method: RequestMethod.POST },
        { path: 'fiocruz/users', method: RequestMethod.PATCH },
        { path: 'fiocruz/login/change-password', method: RequestMethod.PUT },
      )
      .forRoutes('/*');
  }
}
