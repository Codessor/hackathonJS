import { Menu } from './core/menu';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }

    open() {
        this.el.classList.add('open');
    }

    close() {
        this.el.classList.remove('open');
    }

    add(module) {
        this.el.insertAdjacentHTML('beforeend', module.toHTML());
    }
}