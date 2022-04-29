"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordToggler = void 0;
const constants_1 = require("./constants");
(() => {
    const css = `.js-omar-web-password-toggler{position:absolute;left:calc(182px + 170px - 21px);top:9px;display:flex;height:19px;width:19px;border:unset;border-radius:3px;justify-content:center;align-items:center;padding:2px;cursor:pointer}.js-omar-web-password-toggler img{max-width:100%;height:auto}`;
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
})();
function onToggleBtn(input, img) {
    const isHidden = input.type === 'password';
    // eslint-disable-next-line no-param-reassign
    input.type = isHidden ? 'text' : 'password';
    // eslint-disable-next-line no-param-reassign
    img.src = isHidden ? constants_1.eyeHideImg : constants_1.eyeShowImg;
}
function setBtnPosition(input, btn) {
    const { width, height } = input.getBoundingClientRect();
    const top = input.getBoundingClientRect().top + window.scrollY;
    const left = input.getBoundingClientRect().left + window.scrollX;
    btn.style.left = `calc(${left}px + ${width}px - ${height}px)`; // eslint-disable-line no-param-reassign
    btn.style.top = `${top + 1}px`; // eslint-disable-line no-param-reassign
    btn.style.height = `${height - 2}px`; // eslint-disable-line no-param-reassign
    btn.style.width = `${height - 2}px`; // eslint-disable-line no-param-reassign
}
function createPasswordTogglerBtn(input) {
    const btn = window.document.createElement('button');
    btn.type = 'button';
    btn.classList.add(constants_1.btnClass);
    const img = window.document.createElement('img');
    img.src = constants_1.eyeShowImg;
    btn.appendChild(img);
    setBtnPosition(input, btn);
    window.document.addEventListener('resize', () => setBtnPosition(input, btn));
    btn.addEventListener('click', () => onToggleBtn(input, img));
    return btn;
}
function insertPasswordTogglerBtn(input) {
    input.setAttribute(constants_1.inputAttribute, 'true');
    const btn = createPasswordTogglerBtn(input);
    window.document.body.appendChild(btn);
}
function refresh(selector) {
    const inputs = window.document.querySelectorAll(`${selector}:not([${constants_1.inputAttribute}="true"])`);
    inputs.forEach((input) => insertPasswordTogglerBtn(input));
}
function init(selector) {
    refresh(selector);
}
exports.PasswordToggler = {
    init: (options) => { var _a; return init((_a = options === null || options === void 0 ? void 0 : options.selectors) !== null && _a !== void 0 ? _a : 'input[type="password"]'); },
};
//# sourceMappingURL=index.js.map