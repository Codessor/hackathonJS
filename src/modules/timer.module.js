import { Module } from '../core/module'
import { clearWindows } from '../utils'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
        clearWindows()
        console.log('timer')
    }
}