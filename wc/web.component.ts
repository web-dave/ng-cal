import { IWebComponentDecorator } from './web.decorator';

export class WebDaveWebComponent extends HTMLElement {
  template: ShadowRoot | undefined;
  name: string = '';
  tpl: HTMLSpanElement = document.createElement('span');

  static get observedAttributes() {
    return ['name', 'config'];
  }

  attributeChangedCallback(attr: string, oldValue: string, newValue: string) {
    if (attr === 'name') {
      this.name = newValue;
    }
    if (attr === 'config') {
      console.log(attr, oldValue, newValue);
      this.createTemplate();
    }
  }

  constructor() {
    super();
    console.log(this);
    this.template = this.attachShadow({ mode: 'open' });
    this.template.appendChild(this.tpl);
    this.createTemplate();
  }
  connectedCallback() {
    setTimeout(() => this.createTemplate(), 500);
  }
  createTemplate() {
    const configstr = this.getAttribute('config') || '';
    console.log(configstr);
    if (configstr !== '') {
      this.template?.removeChild(this.tpl);
      const config: IWebComponentDecorator = JSON.parse(configstr);
      this.tpl = document.createElement('span');
      const style = document.createElement('style');
      style.innerHTML = config.style;
      this.tpl.innerHTML = config.template;
      this.tpl.appendChild(style);
      this.template?.appendChild(this.tpl);
    }
  }
}
