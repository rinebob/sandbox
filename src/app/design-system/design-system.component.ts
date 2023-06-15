import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ColorSpec, TypographySpec } from '../common/interfaces';
import { PRODUCT_FEEDBACK_APP_COLOR_SPECS, PRODUCT_FEEDBACK_APP_COLORS, PRODUCT_FEEDBACK_APP_TYPOGRAPHY_SPECS } from '../common/constants';
import { generateColorSpecs } from '../common/sbx-utils';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignSystemComponent implements OnInit {

  readonly PRODUCT_FEEDBACK_APP_COLOR_SPECS = PRODUCT_FEEDBACK_APP_COLOR_SPECS;
  readonly PRODUCT_FEEDBACK_APP_TYPOGRAPHY_SPECS = PRODUCT_FEEDBACK_APP_TYPOGRAPHY_SPECS;

  ngOnInit(): void {

    // const colorSpecs = generateColorSpecs(PRODUCT_FEEDBACK_APP_COLORS)

    // console.log('dS ngOI color specs: ', PRODUCT_FEEDBACK_APP_COLOR_SPECS);
    // console.log('dS ngOI typography specs: ', PRODUCT_FEEDBACK_APP_TYPOGRAPHY_SPECS);
  }
  
  generateSpecText(spec: TypographySpec): string {
    // console.log('dS gST spec: ', spec);
    
    const specText = `${spec.typographyLevel} - ${spec.cssClasses.fontFamily} | ${spec.cssClasses.fontSize}/${spec.cssClasses.lineHeight}${spec.cssClasses.letterSpacing ? ' | ' + spec.cssClasses.letterSpacing : ''}`;
    
    // console.log('dS gST specText: ', specText);

    return specText;



  }
}
