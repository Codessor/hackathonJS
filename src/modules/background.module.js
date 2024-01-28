import { Module } from '@/core/module'
import getRandomColor, { clearWindows } from '@/utils';

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        clearWindows()
        document.body.style.background = getRandomColor()
    }
}