import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {elden} from "../../../../../../typings";
import {inject} from "@angular/core";
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";
import {EldenLocationService} from "@angularTopic/signal/signal-crud/service/elden-location.service";

export const itemLocationsResolver: ResolveFn<elden.Location[] | null> =
  async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const itemId = route.paramMap.get('itemId')

    if (!itemId) {
      return []
    }

    const locationService = inject(EldenLocationService)

    return locationService.loadLocations({itemId})
  }
