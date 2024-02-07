import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JSONResponse } from 'src/commons/json_response/json_response';
import { JSONResponseBuilder } from 'src/commons/json_response/json_response.builder';

@Injectable()
export class JSONResponseInterceptor<T> implements NestInterceptor<T, JSONResponse> {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<JSONResponse> {
    return next
      .handle()
      .pipe(
        map((json_response) => json_response),
        catchError((error) => this.handleError(error)),
      );
  }

  private handleError(error): Observable<never> {
    const json_response = new JSONResponseBuilder()
      .setMessage(process.env.NODE_ENV === 'production' ? 'An error has occurred' : error.response.message)
      .build();

    throw new HttpException(json_response, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
