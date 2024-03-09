

export enum RouteParam {
    PARAM_ZIP = 'zip',
    PARAM_ZIP_CODE = 'zipCode',
    PARAM_PROMO_CODE = 'promoCode',
    PARAM_ELECTRIC_UTILITY = 'electricUtility',
    PARAM_GAS_UTILITY = 'gasUtility',
    PARAM_UTM_SOURCE = 'utm_source',
    CAPITAL_ONE_PROMO_CODE = 'VRNJ-103',
    UTM_SOURCE_EIQ = 'eiq',
    UTM_SOURCE_CAPITAL_ONE = 'cap-one',

}


export interface EnergyPlan {
    index: number;
    sysId: number;
    utility: string;
    commodityType: string;
    rateType: string;
    initialTerm: number;
    termLength: number;
    termType: string;
    state: string;
    initialRate: number;
    rateUnit: string;
    rateCode: string;
    utilityId: string;
    utilityPublicName: string;
    displayName: string;
    utillityRateValue: number;
    incentivePublicNotes: {[key: string]: string},
    zipCode: string;
}

export enum CommodityType { 
    ELECTRIC = 'electric',
    GAS = 'gas',
}

export enum RateType {

}

export interface IncentivePublicNotes {
    [key: string]: string;
}

export interface IncentivePackages {
    [key: string]: string;
}

export interface SelectedIds {
    [CommodityType.ELECTRIC]: string;
    [CommodityType.GAS]: string;
}

export interface LocationFromZipCode {
    ZipCode: string;
    City: string;
    State: string;
    County: string;
    CreatedBy: string | null;
    DateCreated: string | null;
    UpdatedBy: string | null;
    LastUpdated: string | null;
    Cncount: number;
    CountyList: string;
    City2: string | null;
    SysId: number;
}


export interface Prospect {
    UtilityId: string;
    ContractControlNumber?: string;
    ReferredByCode?: string;
    Latitude?: number;
    Longitude?: number;
    SignUpDate: string;
    BudgetBilling?: boolean;
    AccountNumber: string;
    AccountClass: string;
    CommodityType: string;
    FirstName: string;
    LastName: string;
    BusinessName?: string;
    SignerName: string;
    Relationship?: string;
    AccountPhone: string;
    ContactPhone: string;
    ServiceAddress: string;
    ServiceCity: string;
    ServiceCounty: string;
    ServiceState: string;
    ServiceZip: string;
    BillingAddress?: string;
    BillingCity?: string;
    BillingState?: string;
    BillingZip?: string;
    AgentId: string;
    PromoCode?: string;
    MethodOfCommunication?: string;
    EmailAddress: string;
    VendorId: string;
    SaleType: string;
    BUID: string;
    Language: string;
    RequestedStartDate: string;
    TaxId?: string;
    TerritorySysId: number;
    RatePlan: string;
    CustNameKey?: any;
    WebConfDox: string;
    SysId?: number;
    IncentivePackages?: IncentivePackages;
    UtmContent?: string;
    UtmMedium?: string;
    ESignature?: string;
    EDate?: string;
    FullName?: string;

    AccountType?: string;
}

export interface BeCampaignDetails {
    CampaignCode: string;
    CampaignType: string;
    CampaignURL: string | null;
    Channel: string;
    Commodity: string;
    CommunicationVehicle: string;
    Description: string;
    EndDate: string;
    IncentivePackages: BeIncentivePackage[];
    IncentivePublicNotes: IncentivePublicNotes;
    Market: string | null;
    MarketList: string | null;
    Notes: string;
    RateList: PromoPlan[];
    RateType: string;
    RevenueClass: string;
    StartDate: string;
    Territory: string | null;
  
}
  
export interface BeIncentivePackage {
    SysId: number;
    Code: string;
    ClonedFrom: string;
    Name: string;
    Description: string;
    Status: string;
    ManagedBy: string;
    Notes: string;
    PublicDescription: string;
    PublicDescriptionSpanish: string;
    PublicURL: string;
    PublicURLSpanish: string;
    ManualEligibility: boolean;
    DateCreated: string;
    UserId: string;
    LastUpdated: string;
    LastUserId: string;
    Mode: string; 
    IsAltered: boolean;
    IsDuplicate: boolean;
    Logs: string;
    Components: IncentivePackageComponent[];
    Errored: boolean;
    Errors: {},
    PageSize: number;
    PageNumber: number;
    SkipRows: number;
    IsQuery: boolean;
    IsModified: boolean;
    SpaOptions: string;
}
  
export interface IncentivePackageComponent {
    SysId: number;
    PackageSysId: number;
    IncentiveSysId: number;
    Order: number;
    RewardRules: string;
    ExcludedStates: string[];
    FulfilledBy: string;
    Schedule:string;
    NumDays: number;
    FromDate: string;
    Limit: number;
    LimitUnit: string;
    FirstSchedule: string;
    NumDaysFirstSchedule: number;
    FromDateFirstSchedule: string;
    LimitFirstSchedule: string;
    LimitUnitFirstSchedule: string;
    SecondSchedule: string;
    NumDaysSecondSchedule: number;
    FromDateSecondSchedule: string;
    LimitSecondSchedule: string;
    LimitUnitSecondSchedule: string;
    MinUsageElectric: number;
    MinUsageGas: number;
    IncentiveCode: string;
    RewardType: string;
    RulesList: string[];
    ExcludedStatesList: string[];
}
  
export interface PromoPlan {
    AccountNumberDescription: string;
    AccountNumberDescriptionSpanish: string;
    AccountNumberLabel: string;
    AccountNumberPattern: string;
    Budget: string;
    BudgetText: string;
    CampaignOnly?: number;
    CancellationFee: number;
    CommodityType: string;
    County?: string;
    DailyRateValue: number;
    EnableForWebOverride: boolean | number;
    EndDate?: string;
    EnrollmentFee: number;
    Filename?: string;
    FlatRateValue: number;
    Index: number;
    IncentivePackages?: IncentivePackages;
    IncentivePublicNotes?: IncentivePublicNotes | undefined;
    InitialRate: number;
    InitialTerm: number;
    Language: string;
    MidRate: number;
    Phone: string;
    Prospect?: Prospect;
    PtcUtil: string;
    PtcRate: number;
    PtcRateLow: number;
    PtcRateHigh: number;
    PtcStartDate: string;
    PtcEndDate: string;
    PublicName: string;
    RateCode: string;
    RateCodeType: string;
    RateUnit: string;
    RateType: string;
    SecondaryTerm: number;
    SecondaryRate: number;
    ShowBudget: boolean;
    StartDate?: string;
    State: string;
    SysId: number;
    TaxRate: string;
    TermLength: number;
    TermType: string;
    TerritoryId: string;
    TerritorySysId: number;
    TodayDate: string;
    TotalTerm: number;
    UsageLimit: number;
    Utility: string;
    UtilityId: string;
    UtilityPublicName: string;
    UtilityRateTypeSysId: number;
  
    City?: string;
    ZipCode?: string;
    DefaultPromoCode?: string;
    AutoDocType?: string;
    
}
  
export type EnergyOrPromoPlan = EnergyPlan | PromoPlan;