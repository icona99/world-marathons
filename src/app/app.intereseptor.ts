import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { ErrorService } from "./core/error/error.service";
import { Router } from "@angular/router";

@Injectable()

export class AppInterseptor implements HttpInterceptor {

    constructor(private errorService: ErrorService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem('accessToken')
        if (req.url.startsWith('http://localhost:3030') && accessToken) {
            req = req.clone({
                setHeaders: {
                    'X-Authorization': accessToken
                }
            })
        }
        if (!req.headers.has('Content-Type')) {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application-json'
                }
            })
        }
        return next.handle(req).pipe(catchError((err) => {
            if (err.status === 401) {
                this.router.navigate(['/auth/login'])
            } else {
                this.errorService.setError(err);
                this.router.navigate(['/error'])
            }

            return [err]
        }));
    }
}


export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterseptor,
    provide: HTTP_INTERCEPTORS
}