

export interface NavButtonConfig {
    routerLink: string;
    text: string;
}

export enum SandboxRoutes {
    DESIGN_SYSTEM = 'design-system',
    MATERIAL_VIEW = 'material-view',
    ANGULAR_NEW_FEATURES = 'ng-new-features',
    BOOKS_APP = 'books',
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

/////////////// BOOKS APP //////////////////////////


export interface Book {
    id?: string;
    title: string;
    author: string;
    year: string;
    category?: Category;
    tags?: string[];
    type?: BookType;   // fiction or non-fiction
}

export enum Category {
    DRAMA = 'drama',
    HUMOR = 'humor',
    BIOGRAPHY = 'biography',
    HORROR = 'horror',
    MYSTERY = 'mystery',
    CHILDRENS = 'childrens',
    YOUNG_ADULT = 'young-adult',
    SCIENCE_FICTION = 'science-fiction',
    ROMANCE = 'romance',
    HISTORY = 'history',
    FANTASY = 'fantasy',
    SCIENCE = 'science',

}

export enum BookType {
    FICTION = 'fiction',
    NON_FICTION = 'non-fiction',
}






//////////////////////////////////////////////