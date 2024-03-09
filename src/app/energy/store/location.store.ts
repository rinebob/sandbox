

import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed, inject } from '@angular/core';

import { LocationFromZipCode } from '../common/interfaces-energy';
import { LocationService } from '../services/location.service';
import { SUPPORTED_ZIP_CODES } from '../common/constants-energy';

type LocationState = {
    zipCode: string | undefined;
    location: LocationFromZipCode | undefined;
    message: string | undefined;
}

const initialState: LocationState = {
    zipCode: undefined,
    location: undefined,
    message: undefined,
}

export const LocationStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store, locationService = inject(LocationService)) => ({

        // supported zip codes: 02114 08701 15290 19904 21223 48138 

        async getLocationFromZipCode(zipCode: string) {

            if (SUPPORTED_ZIP_CODES.includes(zipCode)) {
                const location = await locationService.getStateForZipCode(zipCode);
                patchState(store, {zipCode, location, message: undefined});

            } else {
                patchState(store, {zipCode: undefined, location: undefined, message: `That zip code is not supported: ${zipCode}`});
            }


        },

        async getPlansForZipCode(zipCode: string) {

        }
    }),
    ),

    withComputed((state) => ({
        zipCodeState: computed(() => {
            return state.location()?.State
        }),
    })),
);