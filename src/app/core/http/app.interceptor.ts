import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('AppInterceptor::intercept:request', request);
    return next.handle(this.performRequest(request));
  }

  private performRequest(req: HttpRequest<any>): HttpRequest<any> {
    // console.log("before going out at interceptor", req);
    let headers: HttpHeaders = req.headers;
    headers = headers.set('MyCustomHeaderKey', `MyCustomHeaderValue`);
    // headers = headers.set('MyCustomHeaderKey', `MyCustomHeaderValue`);

    return req.clone({ headers });
}
}
