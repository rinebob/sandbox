

import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed, inject } from '@angular/core';

import { BeCampaignDetails, PromoPlan } from '../common/interfaces-energy';
import { PromoService } from '../services/promo.service';

type PromoState = {
    promoCode: string | undefined;
    campaignDetails: BeCampaignDetails | undefined;
    statesMatch: boolean;
    message: string | undefined;
}

const initialState: PromoState = {
    promoCode: undefined,
    campaignDetails: undefined,
    statesMatch: false,
    message: undefined,
}

export const PromoStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store, promoService = inject(PromoService)) => ({

        async getCampaignDetails(promoCode: string) {
            const campaignDetails: BeCampaignDetails = await promoService.getCampaignDetails(promoCode);

            if (Object.keys(campaignDetails).length) {
                patchState(store, {promoCode, campaignDetails, message: undefined});

            } else {
                patchState(store, {promoCode: undefined, campaignDetails: undefined, message: `No campaign details for promo code: ${promoCode}`});
            }


        },

        setPromoStateMatchesLocationState(locationState: string) {
            const promoState = store.campaignDetails()?.RateList[0].State;
            const matches = promoState === locationState;
            patchState(store, {statesMatch: matches});
        }
    }),
    ),

    withComputed((state) => ({
        campaignEnergyPlans: computed(() => {
            const details = state.campaignDetails();

            const plans = details?.RateList;
            console.log('promoStore campaignEnergyPlans: ', plans);
            return plans;
        }),

        campaignState: computed(() => {
            const plan = state.campaignDetails()?.RateList[0];
            const promoState = plan?.State;
            return promoState;
        }),
    })),
);