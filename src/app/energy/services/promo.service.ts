import { Injectable } from '@angular/core';
import { BeCampaignDetails } from '../common/interfaces-energy';
import { CAMPAIGN_DETAILS_RESP } from '../common/energy-mock-data';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  constructor() { }

  getCampaignDetails(promoCode: string): BeCampaignDetails {
    console.log('promoSvc gCD promo code/campaign deets: ', promoCode, CAMPAIGN_DETAILS_RESP);



    return CAMPAIGN_DETAILS_RESP;
  }
}
