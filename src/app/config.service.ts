import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  load() {
    console.log("load");
    return Promise.resolve(true)
  }

}
