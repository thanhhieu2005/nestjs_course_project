import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class UsersMiddileware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Example Middleware');
        console.log(req.headers.authorization);
        const { authorization } = req.headers;
        if (!authorization)
            throw new HttpException('No Authorization token', HttpStatus.FORBIDDEN);
        if (authorization === 'test') next();
        else
            throw new HttpException(
                'Invalid Authorization Token',
                HttpStatus.FORBIDDEN
            );
    }
}