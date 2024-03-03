import { ColorSpec, NavButtonConfig, SandboxRoutes, TypographySpec } from "./interfaces";
import { Book, Category, BookType } from './interfaces';


export const SANDBOX_NAV_BUTTONS:NavButtonConfig[] = [
    {routerLink: SandboxRoutes.DESIGN_SYSTEM, text: 'Design system' },
    {routerLink: SandboxRoutes.MATERIAL_VIEW, text: 'Material view'},
    {routerLink: SandboxRoutes.ANGULAR_NEW_FEATURES, text: 'Ng new features'},
    {routerLink: SandboxRoutes.BOOKS_APP, text: 'Book list manager'},
    {routerLink: SandboxRoutes.TODOS, text: 'Todos app - Signal Store'},
    
];

// from FrontendMentor.com product feedback app figma design
// https://www.figma.com/file/Vx34JchT0ijjQOtbb2FZDA/product-feedback-app?type=design&node-id=0-1590&t=TSnIoy3yWW3tNvRE-0
export const PRODUCT_FEEDBACK_APP_COLORS = [
    '#ad1fea', '#4661e6', '#373f68', '#ffffff', '#f2f4ff', '#f7f8fd', '#3a4374', '#647196', '#f49f85', '#62bcfa', "#d73737", '#373f68' 
];

export const PRODUCT_FEEDBACK_APP_COLOR_SPECS: ColorSpec[] = [
    {
        "hex": "#ad1fea",
        "textColor": "#ffffff",
        "red": 173,
        "green": 31,
        "blue": 234,
    },
    {
        "hex": "#4661e6",
        "textColor": "#ffffff",
        "red": 70,
        "green": 97,
        "blue": 230,
    },
    {
        "hex": "#373f68",
        "textColor": "#ffffff",
        "red": 55,
        "green": 63,
        "blue": 104,
    },
    {
        "hex": "#ffffff",
        "textColor": "#000000",
        "red": 255,
        "green": 255,
        "blue": 255,
    },
    {
        "hex": "#f2f4ff",
        "textColor": "#000000",
        "red": 242,
        "green": 244,
        "blue": 255,
    },
    {
        "hex": "#f7f8fd",
        "textColor": "#000000",
        "red": 247,
        "green": 248,
        "blue": 253,
    },
    {
        "hex": "#3a4374",
        "textColor": "#ffffff",
        "red": 58,
        "green": 67,
        "blue": 116,
    },
    {
        "hex": "#647196",
        "textColor": "#ffffff",
        "red": 100,
        "green": 113,
        "blue": 150,
    },
    {
        "hex": "#f49f85",
        "textColor": "#ffffff",
        "red": 244,
        "green": 159,
        "blue": 133,
    },
    {
        "hex": "#62bcfa",
        "textColor": "#ffffff",
        "red": 98,
        "green": 188,
        "blue": 250,
    },
    {
        "hex": "#d73737",
        "textColor": "#ffffff",
        "red": 215,
        "green": 55,
        "blue": 55,
    },
    {
        "hex": "#373f68",
        "textColor": "#ffffff",
        "red": 55,
        "green": 63,
        "blue": 104,
    }
];

export const PRODUCT_FEEDBACK_APP_TYPOGRAPHY_SPECS: TypographySpec[] = [
    {
        typographyLevel: 'h1',
        exampleText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        cssClasses: {
            fontFamily: 'Jost',
            fontWeight: 700,
            fontSize:  '24px',
            lineHeight:  '35px',
            letterSpacing:  '-0.33',
            color: '#3a4374',
        },
    },
    {
        typographyLevel: 'h2',
        exampleText: 'Dolorum labore impedit iure excepturi, minima natus.',
        cssClasses: {
            fontFamily: 'Jost',
            fontWeight: 700,
            fontSize:  '20px',
            lineHeight:  '29px',
            letterSpacing:  '-0.25',
            color: '#3a4374',
        },
    },
    {
        typographyLevel: 'h3',
        exampleText: 'Quidem voluptates eos reprehenderit recusandae vero unde',
        cssClasses: {
            fontFamily: 'Jost',
            fontWeight: 700,
            fontSize:  '18px',
            lineHeight:  '26px',
            letterSpacing:  '-0.25',
            color: '#3a4374',
        },
    },
    {
        typographyLevel: 'h4',
        exampleText: 'Neque illo rem adipisci voluptatem mollitia.',
        cssClasses: {
            fontFamily: 'Jost',
            fontWeight: 700,
            fontSize:  '14px',
            lineHeight:  '20px',
            letterSpacing:  '-0.2',
            color: '#3a4374',
        },
    },
    {
        typographyLevel: 'body-1',
        exampleText: 'Ex consequuntur minima magnam dignissimos porro atque modi hic reprehenderit nobis labore vitae consequatur maxime repellat cum, quaerat ratione doloribus praesentium corrupti?',
        cssClasses: {
            fontFamily: 'Jost',
            fontWeight: 400,
            fontSize:  '16px',
            lineHeight:  '23px',
            color: '#3a4374',
        },
    },
    {
        typographyLevel: 'body-2',
        exampleText: 'Qui expedita, est minima odio sequi cupiditate fugit laborum, magni quas error explicabo, sunt autem perferendis. Nostrum accusantium deleniti natus tenetur ea quae quam non iusto, obcaecati itaque sapiente voluptatibus pariatur sint cupiditate repudiandae repellat magni nihil consequuntur harum placeat culpa sit.',
        cssClasses: {
            fontFamily: 'Jost',
            fontWeight: 400,
            fontSize:  '15px',
            lineHeight:  '22px',
            color: '#3a4374',
        },
    },
    {
        typographyLevel: 'body-3',
        exampleText: 'Expedita itaque fuga similique culpa ratione error alias ad voluptate commodi repudiandae dolorem cupiditate ut illum reprehenderit dolor excepturi ea doloribus nobis, odio, perspiciatis iure quisquam, quas est officia. Fugiat suscipit culpa voluptatum ratione commodi soluta laboriosam officiis et! Error, a earum!',
        cssClasses: {
            fontFamily: 'Jost',
            fontWeight: 600,
            fontSize:  '13px',
            lineHeight:  '19px',
            color: '#3a4374',
        },
    },
    // {
    //     typographyLevel: '',
    //     fontFamily: '',
    //     fontWeight: 0,
    //     fontSize:  '',
    //     lineHeight:  '',
    //     letterSpacing:  '',
    //      color: '',
    // },
];

/////////////// BOOKS APP //////////////////////

export const GREAT_GATSBY: Book = {
    id: '1010',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: '1925',
    category: Category.DRAMA,
    type: BookType.FICTION,
    tags: [],
    pagesRead: 45,
};

export const LORD_OF_THE_RINGS: Book = {
    id: '1020',
    title: 'The Lord of The Rings',
    author: 'J.R.R. Tolkein',
    year: '1937',
    category: Category.FANTASY,
    type: BookType.FICTION,
    tags: [],
    pagesRead: 23,
};

export const CATCHER_IN_THE_RYE: Book = {
    id: '1030',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: '1951',
    category: Category.DRAMA,
    type: BookType.FICTION,
    tags: [],
    pagesRead: 53,
};

export const NINETEEN_EIGHTY_FOUR: Book = {
    id: '1040',
    title: '1984',
    author: 'Gerorge Orwell',
    year: '1949',
    category: Category.SCIENCE_FICTION,
    type: BookType.FICTION,
    tags: [],
    pagesRead: 112,
};

export const PRIDE_AND_PREJUDICE: Book = {
    id: '1050',
    title: 'Price and Prejudice',
    author: 'Jane Austen',
    year: '1813',
    category: Category.ROMANCE,
    type: BookType.FICTION,
    tags: [],
    pagesRead: 23,
};

export const CATCH_TWENTY_TWO: Book = {
    id: '1060',
    title: 'Catch 22',
    author: 'Joseph Heller',
    year: '1961',
    category: Category.HUMOR,
    type: BookType.FICTION,
    tags: [],
    pagesRead: 155,
};

export const ANIMAL_FARM: Book = {
    id: '1070',
    title: 'Animal Farm',
    author: 'George Orwell',
    year: '1945',
    category: Category.HISTORY,
    type: BookType.FICTION,
    tags: [],
    pagesRead: 78,
};

export const BRAVE_NEW_WORLD: Book = {
    id: '1080',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: '1931',
    category: Category.SCIENCE_FICTION,
    type: BookType.FICTION,
    tags: [],
    pagesRead: 85,
};

export const BRIEF_HISTORY_OF_TIME: Book = {
    id: '1090',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    year: '1988',
    category: Category.SCIENCE,
    type: BookType.NON_FICTION,
    tags: [],
    pagesRead: 67,
};

export const SILENT_SPRING: Book = {
    id: '1100',
    title: 'Silent Spring',
    author: 'Rachel Carson',
    year: '1962',
    category: Category.SCIENCE,
    type: BookType.NON_FICTION,
    tags: [],
    pagesRead: 87,
};

// export const : Book = {
//     title: '',
//     author: '',
//     year: '',
//     category: Category.SCIENCE_FICTION,
//     type: BookType.FICTION,
//     tags: [],
    // pagesRead: 0,
// };

export const ALL_BOOKS: Book[] = [
    GREAT_GATSBY,
    LORD_OF_THE_RINGS,
    CATCHER_IN_THE_RYE,
    NINETEEN_EIGHTY_FOUR,
    PRIDE_AND_PREJUDICE,
    CATCH_TWENTY_TWO,
    ANIMAL_FARM,
    BRAVE_NEW_WORLD,
    BRIEF_HISTORY_OF_TIME,
    SILENT_SPRING,
];

export const BOOK_INITIALIZER: Book = {
    id: '0',
    title: '',
    author: '',
    year: '',
    category: Category.SCIENCE_FICTION,
    type: BookType.FICTION,
    tags: [],
    pagesRead: 0,
};

///////////////////////////////////////////////