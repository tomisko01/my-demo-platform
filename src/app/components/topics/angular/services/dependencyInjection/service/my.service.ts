import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MyService {

  constructor(private http: HttpClient) { }
}
