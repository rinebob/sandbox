import { Injectable, inject } from '@angular/core';

import { STATE_FROM_ZIP_CODE_RESPONSES } from '../common/energy-mock-data';
import { LocationFromZipCode } from '../common/interfaces-energy';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getStateForZipCode(zipCode: string): LocationFromZipCode | undefined {
    const resp = STATE_FROM_ZIP_CODE_RESPONSES.find(resp => resp.ZipCode === zipCode);
    console.log('locationSvc gSFZ state for zip resp: ', resp);
    return resp && Object.keys(resp).length ? resp : undefined;
  }
}
