import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {LoginSignalService} from "@angularTopic/signal/signal-login/service/login-signal.service";
import {inject} from "@angular/core";


export const isUserAuthenticated: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const loginSignalService = inject(LoginSignalService)
    const routerService = inject(Router)

    if (loginSignalService.isLoggedIn()) {
      return true
    } else {
      return routerService.parseUrl('/angular/signal/signalAuth')
    }
  }
