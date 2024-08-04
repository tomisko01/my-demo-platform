import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {LoadingService} from "@angularTopic/signal/signal-crud/loading/loading.service";
import {inject} from "@angular/core";
import {finalize} from "rxjs";

export const loadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const loadingService = inject(LoadingService)

  loadingService.loadingOn()

  return next(req)
    .pipe(
      finalize(() => {
        loadingService.loadingOff()
      })
    )
}
