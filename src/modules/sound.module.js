import {Module} from '../core/module'
import bababooey from '../assets/sounds/bababooey.mp3'
import brue from '../assets/sounds/brue.mp3'
import gta from '../assets/sounds/gta.mp3'
import napali from '../assets/sounds/na-nas-napali.mp3'
import nope from '../assets/sounds/nope.mp3'
import privet from '../assets/sounds/o-privet.mp3'

// let sound = 123
export class SoundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
        console.log('sound')
        const sounds = [bababooey,brue,gta,napali,nope,privet]
        const audio = new Audio(sounds[Math.floor(Math.random()*sounds.length)])
        audio.play()
        
    }
}