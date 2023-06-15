import { ColorSpec } from "./interfaces";


export function generateColorSpec(hex: string): ColorSpec {
    const {red, green, blue} = hexToRGB(hex);
    const spec: ColorSpec = {
        hex,
        textColor: '#ffffff',   // default to white.  manually change if needed
        red,
        blue,
        green,
    }

    return spec;

}

function hexToRGB(hex: string) {
    const red = parseInt(hex.substring(1, 3), 16);
    const green = parseInt(hex.substring(3, 5), 16);
    const blue = parseInt(hex.substring(5, 7), 16);

    return {red, green, blue};
  }

export function generateColorSpecs(colors: string[]): ColorSpec[] {
    const colorSpecs: ColorSpec[] = [];

    for (const color of colors) {
        const spec = generateColorSpec(color);
  
        colorSpecs.push(spec);
  
    }
    console.log('dSU gCS color specs: ', colorSpecs);

    return colorSpecs;

}