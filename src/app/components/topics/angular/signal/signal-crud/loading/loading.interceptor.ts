import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {LoadingService} from "@angularTopic/signal/signal-crud/loading/loading.service";
import {inject} from "@angular/core";
import {finalize} from "rxjs";
import {SkipLoadingToken} from "@angularTopic/signal/signal-crud/loading/skip-loading.token";

export const loadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const loadingService = inject(LoadingService)

  if(req.context.get(SkipLoadingToken)){
    return next(req)
  }

  loadingService.loadingOn()

  return next(req)
    .pipe(
      finalize(() => {
        loadingService.loadingOff()
      })
    )
}
