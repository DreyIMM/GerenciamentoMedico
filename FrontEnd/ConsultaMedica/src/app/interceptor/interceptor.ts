import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Buffer} from 'buffer';

import { map } from "rxjs/operators";
import { LoginserviceService } from '../login/loginservice.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
    
    constructor(private loginService: LoginserviceService) {

    }

    private password = this.loginService.getPassword()
    private username = this.loginService.getUsername();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // return next.handle(req);
        let headers;
 
        if (req.body instanceof FormData) {
            headers: new HttpHeaders(
                {
                    contentType: "false",
                    processData: "false",
                    Authorization : 'Basic ' + Buffer.from(`${this.username}:${this.password}`, 'utf-8').toString('base64')
                }
            );

        }
        else {
            headers = new HttpHeaders()
                .append("accept", "application/json")
                .append("Content-Type", "application/json")
                .append("Authorization", "Basic " + Buffer.from(`${this.loginService.username}:${this.loginService.password}`, 'utf-8').toString('base64'));
        }

   
        let request = req.clone({ headers });

        return next.handle(request).pipe(
            map((event) =>
            {
                return event;
          }))

    }
}