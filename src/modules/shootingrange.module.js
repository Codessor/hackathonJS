import { Module } from '../core/module'

export class ShootingRangeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
        console.log('Shooting Range')
    }
}