import { ColorSpec, NavButtonConfig, SandboxRoutes, TypographySpec } from "./interfaces";


export const SANDBOX_NAV_BUTTONS:NavButtonConfig[] = [
    {routerLink: SandboxRoutes.DESIGN_SYSTEM, text: 'design-system' },
    {routerLink: SandboxRoutes.MATERIAL_VIEW, text: 'material-view'},
    
];

// from FrontendMentor.com product feedback app figma design
// https://www.figma.com/file/Vx34JchT0ijjQOtbb2FZDA/product-feedback-app?type=design&node-id=0-1590&t=TSnIoy3yWW3tNvRE-0
export const PRODUCT_FEEDBACK_APP_COLORS = [
    '#ad1fea', '#4661e6', '#373f68', '#ffffff', '#f2f4ff', '#f7f8fd', '#3a4374', '#647196', '#f49f85', '#62bcfa', 
];

export const PRODUCT_FEEDBACK_APP_COLOR_SPECS: ColorSpec[] = [
    {
        "hex": "#ad1fea",
        "textColor": "#ffffff",
        "red": 173,
        "blue": 234,
        "green": 31
    },
    {
        "hex": "#4661e6",
        "textColor": "#ffffff",
        "red": 70,
        "blue": 230,
        "green": 97
    },
    {
        "hex": "#373f68",
        "textColor": "#ffffff",
        "red": 55,
        "blue": 104,
        "green": 63
    },
    {
        "hex": "#ffffff",
        "textColor": "#000000",
        "red": 255,
        "blue": 255,
        "green": 255
    },
    {
        "hex": "#f2f4ff",
        "textColor": "#000000",
        "red": 242,
        "blue": 255,
        "green": 244
    },
    {
        "hex": "#f7f8fd",
        "textColor": "#000000",
        "red": 247,
        "blue": 253,
        "green": 248
    },
    {
        "hex": "#3a4374",
        "textColor": "#ffffff",
        "red": 58,
        "blue": 116,
        "green": 67
    },
    {
        "hex": "#647196",
        "textColor": "#ffffff",
        "red": 100,
        "blue": 150,
        "green": 113
    },
    {
        "hex": "#f49f85",
        "textColor": "#ffffff",
        "red": 244,
        "blue": 133,
        "green": 159
    },
    {
        "hex": "#62bcfa",
        "textColor": "#ffffff",
        "red": 98,
        "blue": 250,
        "green": 188
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