import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();
    const { method, url, ip, body } = req;
    const start = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          const res = ctx.getResponse();
          const statusCode = res.statusCode;
          const bodyStr = body && Object.keys(body).length > 0 ? ` body=${JSON.stringify(body)}` : '';
          this.logger.log(`${method} ${url} ${statusCode} ${Date.now() - start}ms - ${ip ?? 'unknown'}${bodyStr}`);
        },
        error: () => {
          const bodyStr = body && Object.keys(body).length > 0 ? ` body=${JSON.stringify(body)}` : '';
          this.logger.warn(`${method} ${url} failed after ${Date.now() - start}ms - ${ip ?? 'unknown'}${bodyStr}`);
        },
      }),
    );
  }
}
