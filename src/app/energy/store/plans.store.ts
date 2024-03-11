

import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { addEntities, setAllEntities, withEntities } from '@ngrx/signals/entities';
import { computed, inject } from '@angular/core';

import { CommodityType, EnergyPlan, LocationFromZipCode, SelectedIds } from '../common/interfaces-energy';
import { SUPPORTED_ZIP_CODES } from '../common/constants-energy';
import { PlansService } from '../services/plans.service';

type PlansState = {
    zipCode: string | undefined;
    message: string | undefined;
    selectedUtilities: SelectedIds;
    selectedPlans: SelectedIds;
}

const initialState: PlansState = {
    zipCode: undefined,
    message: undefined,
    selectedUtilities: {[CommodityType.ELECTRIC]: '', [CommodityType.GAS]: ''},
    selectedPlans: {[CommodityType.ELECTRIC]: '', [CommodityType.GAS]: ''},
}

export const PlansStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withEntities<EnergyPlan>(),
    withMethods((store, plansService = inject(PlansService)) => ({

        // supported zip codes: 02114 08701 15290 19904 21223 48138 

        async getPlansForZipCode(zipCode: string) {

            if (SUPPORTED_ZIP_CODES.includes(zipCode)) {
                const defaultPlans = await plansService.getPlansForZipCode(zipCode);
                patchState(store, {message: undefined});
                patchState(store, 
                    setAllEntities([...defaultPlans], {idKey: 'rateCode'})
                );

            } else {
                patchState(store, {message: `That zip code is not supported: ${zipCode}`});
            }
        },

        setSelectedUtilities(utilities: SelectedIds) {
            const electricUtilId = store.entities().find(plan => plan.utilityPublicName === utilities[CommodityType.ELECTRIC])?.utilityId;
            const gasUtilId = store.entities().find(plan => plan.utilityPublicName === utilities[CommodityType.GAS])?.utilityId;
            
            const selectedUtilities: SelectedIds = {
                [CommodityType.ELECTRIC]: electricUtilId ? electricUtilId : '',
                [CommodityType.GAS]: gasUtilId ? gasUtilId : ''
            };

            patchState(store, {selectedUtilities})
        },
        setSelectedPlans(selectedPlans: SelectedIds) {
            

            patchState(store, {selectedPlans})
        }
    }),
    ),
    withComputed((state) => ({
        electricPlans: computed(() => {
            const plans = state.entities();

            const electricPlans = plans?.filter(plan => !plan.rateCode.includes('_COO_') && plan.commodityType === 'E')
            return electricPlans;
        }),
        gasPlans: computed(() => {
            const plans = state.entities();

            const gasPlans = plans?.filter(plan => !plan.rateCode.includes('_COO_') && plan.commodityType === 'G')
            return gasPlans;
        }),
        electricUtilities: computed(() => {
            const plans = state.entities();
            
            const utilities: string[] = [] ;

            const electricPlans = plans?.filter(plan => plan.commodityType === 'E')
            if (electricPlans) {
                for (const plan of electricPlans) {
                    if (!utilities.includes(plan.utilityPublicName)) {
                        utilities.push(plan.utilityPublicName);
                    }
                }
            }
            return utilities;
        }),
        gasUtilities: computed(() => {
            const plans = state.entities();
            
            const utilities: string[] = [] ;

            const gasPlans = plans?.filter(plan => plan.commodityType === 'G')
            if (gasPlans) {
                for (const plan of gasPlans) {
                    if (!utilities.includes(plan.utilityPublicName)) {
                        utilities.push(plan.utilityPublicName);
                    }
                }
            }
            return utilities;
        }),
        plansForSelectedUtilities: computed(() => {
            const selectedUtilities = state.selectedUtilities();
            const plansForUtilities = state.entities().filter(plan => plan.utilityId === selectedUtilities[CommodityType.ELECTRIC] || plan.utilityId === selectedUtilities[CommodityType.GAS]);

            console.log('pSto pFSU plans for utils.  selectedUtils: ', selectedUtilities);
            console.log('pSto pFSU plans for utils.  plans: ', plansForUtilities);

            return plansForUtilities;
        }),
    })),

);