import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root', // service will not be added to bundle when it's not used!
  useFactory: (http: HttpClient) => new TreeShakeableService(http),
  deps: [HttpClient]
})
export class TreeShakeableService {

  constructor(private http: HttpClient) {
  }
}
