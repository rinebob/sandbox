import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { getState } from '@ngrx/signals';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

import { LocationStore } from '../../store/location.store';
import { PlansStore } from '../../store/plans.store';
import { CommodityType, EnergyPlan, LocationFromZipCode, RouteParam, SelectedIds } from '../../common/interfaces-energy';
import { PromoStore } from '../../store/promo.store';

@Component({
  selector: 'sg-energy-view',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './energy-view.component.html',
  styleUrl: './energy-view.component.scss'
})
export class EnergyViewComponent implements OnInit {

    routeParams = signal<Params>({})

    locationStore = inject(LocationStore);
    plansStore = inject(PlansStore);
    promoStore = inject(PromoStore);

    entityMap = this.plansStore.entityMap();

    location$: Observable<LocationFromZipCode | undefined> = toObservable(this.locationStore.location);

    electricControl = new FormControl('');
    gasControl = new FormControl('');
    utilitiesForm = new FormGroup({
        'electricControl': this.electricControl,
        'gasControl': this.gasControl,
    });

    readonly Object = Object

    constructor(private route: ActivatedRoute) {

        this.route.queryParams.pipe().subscribe(params => {
            this.handleRouteParams(params);
        })

        effect(this.effect);
    }

    effect = () => {
        const zipCode = getState(this.locationStore).zipCode;
        if (zipCode) {
            console.log('eV ctor eff.  updated zip code: ', zipCode);
            this.getPlansForZipCode(zipCode);
        }
        // const plansStore = getState(this.plansStore);
        // const promoStore = getState(this.promoStore);
        // console.log('eV ctor eff.  plans store state: ', plansStore);
        // console.log('eV ctor eff.  promo store state: ', promoStore);
    }

    ngOnInit(): void {
        // const zip = getState(this.locationStore).zipCode

        this.location$.pipe().subscribe(location => {
            console.log('eV ngOI location sub: ', location);
            console.log('eV ngOI location sub: ', location);
            this.promoStore.setPromoStateMatchesLocationState(location ? location.State : '');
        });
        
        this.utilitiesForm.valueChanges.pipe().subscribe(changes => {
            console.log('eV ngOI utils form value changes sub: ', changes);

        });

    }

    handleRouteParams(params: Params) {
        console.log('eV hRP route params: ', params);

        this.routeParams.set(params);

        const zipCode = params[RouteParam.PARAM_ZIP_CODE] ? params[RouteParam.PARAM_ZIP_CODE] : params[RouteParam.PARAM_ZIP] ? params[RouteParam.PARAM_ZIP] : undefined;
        const promoCode = params[RouteParam.PARAM_PROMO_CODE] ? params[RouteParam.PARAM_PROMO_CODE] : undefined;
        const utmSource = params[RouteParam.PARAM_UTM_SOURCE] ? params[RouteParam.PARAM_UTM_SOURCE] : undefined;

        console.log('eV hRP zip/promo/utm: ', zipCode, promoCode, utmSource);

        if (zipCode) {
            this.handleGetLocation(zipCode);
        }

        if (promoCode) {
            this.getCampaignDetails(promoCode);
        }
        
    }

    handleGetLocation(zipCode: string) {
        console.log('eV hGL get location for zip: ', zipCode);
        
        this.locationStore.getLocationFromZipCode(zipCode);
    }

    // const selectedUtilities: SelectedIds = {
    //     [CommodityType.ELECTRIC]: elec,
    //     [CommodityType.GAS]: gas,
    //   }
    //   // console.log('sU sSU call plans svc setSelUtils with selected utilities: ', selectedUtilities);
    //   this.plansService.setSelectedUtilities(selectedUtilities);
    // }
    
    // handleSeeRates() {
    //   // console.log('--------------- HANDLE SEE RATES -------------------');
      
    //   // console.log('sU hSR setting selected utilities: ', selectedElectricUtility, selectedGasUtility);
    //   this.setSelectedUtilities(selectedElectricUtility, selectedGasUtility);

    handleSeeRates() {
        console.log('eV hSR handle see rates. form values: ', this.utilitiesForm.value);
        const selectedElectricUtility = this.utilitiesForm.controls.electricControl.value ? this.utilitiesForm.controls.electricControl.value : '';
        const selectedGasUtility = this.utilitiesForm.controls.gasControl.value ? this.utilitiesForm.controls.gasControl.value : '';
        const utils: SelectedIds = {[CommodityType.ELECTRIC]: selectedElectricUtility, [CommodityType.GAS]: selectedGasUtility}
        this.plansStore.setSelectedUtilities(utils);
    }
    
    handleSelectPlan(rateCode: string, comType: string) {
        console.log('eV hSR handle select plan. plan.rateCode: ', rateCode);
        const selectedPlans: SelectedIds = {[CommodityType.ELECTRIC]: '', [CommodityType.GAS]: ''};
        const commodityType = comType as CommodityType;
        selectedPlans[commodityType] = rateCode;
        console.log('eV hSR selectedPlans: ', selectedPlans);
        
        
    }
    
    getCampaignDetails(promoCode: string) {
        console.log('eV gCD get campaign details for promo code: ', promoCode);
        this.promoStore.getCampaignDetails(promoCode);

    }

    getPlansForZipCode(zipCode: string) {
        this.plansStore.getPlansForZipCode(zipCode);
    }

    printState() {
        console.log('eV pS plans[0]: ', this.plansStore.entities()[0]);

        const locationState = getState(this.locationStore);
        console.log('eV pS location state/zip: ', locationState, locationState.zipCode);
    }

    


    

}
