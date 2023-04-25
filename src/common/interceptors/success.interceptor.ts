import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

/**
 * usage endpoint
 * - /news : to track activity to get All news
 *
 */

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Pre-controller
    console.log('Before...');

    const now = Date.now();

    // Post-request
    return next.handle().pipe(
      map((data) => ({
        // 컨트롤러에서 넘겨받은 데이터. 클라이언트에게 전하기 전 처리할 수 있다
        success: true,
        data,
      })),
    );
  }
}
