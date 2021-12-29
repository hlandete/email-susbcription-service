import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardPublic implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.headers.authorization);
    console.log(process.env.PUBLIC_TOKEN);
    return (process.env.PUBLIC_TOKEN === request.headers.authorization || process.env.PRIVATE_TOKEN === request.headers.authorization);
  }
}

export class AuthGuardPrivate implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.headers.authorization);
    console.log(process.env.API_KEY);
    return (process.env.PRIVATE_TOKEN === request.headers.authorization);
  }
}