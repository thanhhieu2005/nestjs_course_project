import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UsersMiddileware } from "./middlewares/users.middleware";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    exports: []
})

export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UsersMiddileware).forRoutes(UsersController);
    }
}