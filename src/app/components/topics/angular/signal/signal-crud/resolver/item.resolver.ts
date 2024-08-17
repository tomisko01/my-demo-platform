import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {elden} from "../../../../../../typings";
import {inject} from "@angular/core";
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";

export const itemResolver: ResolveFn<elden.Item | null> =
  async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const itemId = route.paramMap.get('itemId')

    if (!itemId) {
      return null
    }

    const itemService = inject(EldenItemHttpClientService)

    return itemService.getItemById(itemId)
  }
