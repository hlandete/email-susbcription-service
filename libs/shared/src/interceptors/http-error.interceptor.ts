import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(catchError(error => {
        throw error ;
      })
      );
  }
}