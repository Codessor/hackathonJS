import { Module } from '../core/module'
import { loremIpsum } from "lorem-ipsum"


export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
    const textBlock = document.createElement('div')
    textBlock.className = 'message-block'
    const text = document.createElement('p')
    textBlock.append(text)
    text.textContent = `${loremIpsum()}`
    document.body.prepend(textBlock)
    textBlock.style.opacity = 1
    setTimeout(() => {
      setInterval(() => {
        textBlock.style.opacity -= 0.05
        if (textBlock.style.opacity <= 0) {
          textBlock.remove()
        }
      }, 35)
    }, 4000)
  }
}