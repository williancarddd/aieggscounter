import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilters implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    // do you now know the error in exception for treatment
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    if (exception.code == 'P2025') {
      return response.status(404).json({
        statusCode: 404,
        message: exception.message,
      });
    }
    if (exception.code == 'P2003') {
      return response.status(409).json({
        statusCode: 409,
        message: exception.meta.field_name,
      });
    }
    return response.status(500).json({
      statusCode: 500,
      message: 'Internal server error, by database.',
    });
  }
}
