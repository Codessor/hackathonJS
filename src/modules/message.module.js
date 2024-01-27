import { Module } from '../core/module'
import { loremIpsum } from "lorem-ipsum"
import getRandomColor from '../utils';
import {getLoremMessage} from '../utils'


export class MessageModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
        console.log('message')
        const textBlock = document.createElement('div')
        textBlock.className='message-block'
        textBlock.style.width="500"
        textBlock.style.height="300"
        textBlock.style.background=getRandomColor()
        const text = document.createElement('p')
        textBlock.append(text)
        text.textContent = `${loremIpsum()}`
        document.body.prepend(textBlock)
        textBlock.style.opacity = 1 
        setTimeout(() => {
            setInterval(()=> {
              textBlock.style.opacity-=0.05
              if (textBlock.style.opacity <= 0) {
              textBlock.remove()
              }
            }, 35)
          }, 4000)
        
    }
}