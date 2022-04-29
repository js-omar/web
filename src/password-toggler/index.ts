import { btnClass, eyeHideImg, eyeShowImg, inputAttribute } from './constants';

(() => {
  const css = `.js-omar-web-password-toggler{position:absolute;left:calc(182px + 170px - 21px);top:9px;display:flex;height:19px;width:19px;border:unset;border-radius:3px;justify-content:center;align-items:center;padding:2px;cursor:pointer}.js-omar-web-password-toggler img{max-width:100%;height:auto}`;
  const style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
})();

function onToggleBtn(input: HTMLInputElement, img: HTMLImageElement): void {
  const isHidden = input.type === 'password';
  // eslint-disable-next-line no-param-reassign
  input.type = isHidden ? 'text' : 'password';
  // eslint-disable-next-line no-param-reassign
  img.src = isHidden ? eyeHideImg : eyeShowImg;
}

function setBtnPosition(input: HTMLInputElement, btn: HTMLButtonElement): void {
  const { width, height } = input.getBoundingClientRect();
  const top = input.getBoundingClientRect().top + window.scrollY;
  const left = input.getBoundingClientRect().left + window.scrollX;
  btn.style.left = `calc(${left}px + ${width}px - ${height}px)`; // eslint-disable-line no-param-reassign
  btn.style.top = `${top + 1}px`; // eslint-disable-line no-param-reassign
  btn.style.height = `${height - 2}px`; // eslint-disable-line no-param-reassign
  btn.style.width = `${height - 2}px`; // eslint-disable-line no-param-reassign
}

function createPasswordTogglerBtn(input: HTMLInputElement): HTMLButtonElement {
  const btn = window.document.createElement('button');
  btn.type = 'button';
  btn.classList.add(btnClass);
  const img = window.document.createElement('img');
  img.src = eyeShowImg;
  btn.appendChild(img);
  setBtnPosition(input, btn);
  window.document.addEventListener('resize', () => setBtnPosition(input, btn));
  btn.addEventListener('click', () => onToggleBtn(input, img));
  return btn;
}

function insertPasswordTogglerBtn(input: HTMLInputElement): void {
  input.setAttribute(inputAttribute, 'true');
  const btn = createPasswordTogglerBtn(input);
  window.document.body.appendChild(btn);
}

function refresh(selector: string): void {
  const inputs = window.document.querySelectorAll(
    `${selector}:not([${inputAttribute}="true"])`
  ) as NodeListOf<HTMLInputElement>;
  inputs.forEach((input) => insertPasswordTogglerBtn(input));
}

function init(selector: string): void {
  refresh(selector);
}

export const PasswordToggler = {
  init: (options?: { selectors?: string }) =>
    init(options?.selectors ?? 'input[type="password"]'),
};
