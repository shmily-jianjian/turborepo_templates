import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse, COMMON_ERROR_CODE } from '../dto/api-response.dto';
import { ORPCError } from '@orpc/server';

// 自定义业务异常
export class BusinessException extends Error {
  constructor(
    public readonly code: number,
    message: string,
  ) {
    super(message);
    console.log(message, code);

    this.name = 'BusinessException';
  }
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let code = COMMON_ERROR_CODE;
    let message = '服务器内部错误';
    let issues = [];

    if (exception instanceof ORPCError) {
      code = COMMON_ERROR_CODE;
      if (exception.data?.issues && exception.data?.issues.length > 0) {
        issues = exception.data?.issues;
      }
      message = exception.message;
      status = HttpStatus.BAD_REQUEST;
    } else if (exception instanceof BusinessException) {
      code = exception.code;
      message = exception.message;
      status = HttpStatus.BAD_REQUEST;
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse() as any;

      if (res && typeof res === 'object') {
        const rawMessage = res.message;
        if (Array.isArray(rawMessage) && rawMessage.length > 0) {
          message = rawMessage.join('; ');
        } else if (typeof rawMessage === 'string') {
          message = rawMessage;
        } else {
          message = res.error || exception.message;
        }
      } else {
        message = exception.message;
      }
    } else if (exception instanceof Error) {
      message = exception.message || message;
    }

    const body: ApiResponse<null> = {
      code,
      message,
      data: null,
      issues: issues.length > 0 ? issues : undefined,
    };

    response.status(status).json(body);
  }
}
