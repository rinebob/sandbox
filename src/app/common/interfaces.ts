

export interface NavButtonConfig {
    routerLink: string;
    text: string;
}

export enum SandboxRoutes {
    DESIGN_SYSTEM = 'design-system',
    MATERIAL_VIEW = 'material-view',
}

export interface ColorSpec {
    hex: string;
    textColor?: string;
    red: number;
    blue: number;
    green: number;
}

export interface TypographyCss {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
    letterSpacing?: string;
    color: string;
}
export interface TypographySpec {
    typographyLevel: string;
    exampleText?: string;
    cssClasses: TypographyCss;
}
