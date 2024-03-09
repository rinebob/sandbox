import { Injectable } from '@angular/core';

import { ENERGY_PLANS } from '../common/energy-mock-data';
import { EnergyPlan } from '../common/interfaces-energy';
import { SUPPORTED_ZIP_CODES } from '../common/constants-energy';
@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor() { }

  getPlansForZipCode(zipCode: string): EnergyPlan[] {
    console.log('plansSvc gPFZC get plans for zip: ', zipCode);
    
    const plans = ENERGY_PLANS.filter(plan => plan.zipCode === zipCode);
    console.log('plansSvc gPFZC plans: ', plans);

    return plans;

  }
}
