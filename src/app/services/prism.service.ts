import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import { isPlatformBrowser } from '@angular/common';

declare var Prism: any;

@Injectable({
  providedIn: 'root',
})
export class PrismService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  highlightAll() {

      Prism.highlightAll();
   
  }

  convertHtmlIntoString(text: string) {
    return text
      .replace(new RegExp('&', 'g'), '&amp;')
      .replace(new RegExp('<', 'g'), '&lt;');
  }
}
