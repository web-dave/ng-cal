import { WebDaveWebComponent } from './web.component';

export function Template(config: IWebComponentDecorator) {
  return function (target: any) {
    console.log(target, config);
    target.setAttribute('template', config.template);
    target.setAttribute('style', config.style);
  };
}

export function CreateTemplate(config: IWebComponentDecorator) {
  const template = document.createElement('span');
  const style = document.createElement('style');
  style.innerHTML = config.style;
  template.innerHTML = config.template;
  template.appendChild(style);
  return template;
}

export interface IWebComponentDecorator {
  style: string;
  template: string;
}
