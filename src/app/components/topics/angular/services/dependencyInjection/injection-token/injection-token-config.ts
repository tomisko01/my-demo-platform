import {InjectionToken} from "@angular/core";

export interface ExampleConfiguration {
  apiUrl: string;
  itemCacheSize: number;
}

export const ELDEN_CONFIG: ExampleConfiguration = {
  apiUrl: "http://localhost:8080",
  itemCacheSize: 10,
}

export const SOULS_CONFIG: ExampleConfiguration = {
  apiUrl: "http://localhost:666",
  itemCacheSize: 666,
}


export const ELDEN_CONFIG_TOKEN = new InjectionToken<ExampleConfiguration>('ELDEN_CONFIG_TOKEN')
export const SOULS_CONFIG_TOKEN = new InjectionToken<ExampleConfiguration>('SOULS_CONFIG_TOKEN',
  {
    providedIn: 'root',
    factory: () => SOULS_CONFIG
  }) //tree-shakeable dep, not imported in bundle if not used
