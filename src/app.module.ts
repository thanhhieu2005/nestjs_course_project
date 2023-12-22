import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
  ],
  controllers: [],
  providers: [],
})

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       .forRoutes({path: 'cats', method: RequestMethod.GET});
//   }
// }

export class AppModule { }
