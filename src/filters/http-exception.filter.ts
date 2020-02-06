import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        const message = (exception.message.message !== undefined) ? exception.message.message : exception.message.error;
        response
            .status(status)
            .json({
                success: false,
                error: {
                    status: status,
                    message
                }
            });
    }
}