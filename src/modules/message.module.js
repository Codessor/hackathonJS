import { Module } from '../core/module'
import { loremIpsum } from "lorem-ipsum"


export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
    const wrapper = document.createElement('div')
    wrapper.className = 'message-wrapper'
    const textBlock = document.createElement('div')
    textBlock.className = 'message-block'
    const text = document.createElement('p')
    textBlock.append(text)
    wrapper.append(textBlock)
    text.textContent = `${loremIpsum()}`
    document.body.prepend(wrapper)
    textBlock.style.opacity = 1
    setTimeout(() => {
      setInterval(() => {
        textBlock.style.opacity -= 0.05
        if (textBlock.style.opacity <= 0) {
          wrapper.remove()
        }
      }, 35)
    }, 4000)

  }
}