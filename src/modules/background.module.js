import { Module } from '../core/module'
import getRandomColor from '../utils';

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
        console.log('background')
        document.body.style.background = getRandomColor()
    }
}