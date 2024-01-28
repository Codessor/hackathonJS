import { Module } from '@/core/module'
import { TIME_TIMER } from "@/consts";

export class ClicksModule extends Module {
    #countClick
    #countDblClick

    constructor(type, text) {
        super(type, text);
    }

    #createTextHTML() {
        const textHTML = document.createElement('span')
        textHTML.className = 'text-block'
        return textHTML
    }

    #removeTextHTML() {
        const textHTML = document.querySelector('.text-block')
        if (textHTML) {
            textHTML.remove()
        }
    }

    #count() {
        let counter = 0
        return function () {
            return counter++
        }
    }

    trigger() {
        let countClick = 0
        let countDblClick = 0
        this.#removeTextHTML()
        const body = document.querySelector('body')
        const textHTML = this.#createTextHTML()
        body.insertAdjacentElement('afterbegin', textHTML)
        setTimeout(() => {
            this.#countClick = this.#count()
            this.#countDblClick = this.#count()
            window.addEventListener('click', () => {
                countClick = this.#countClick()
            })
            window.addEventListener('dblclick', () => {
                countDblClick = this.#countDblClick()
            })
            setTimeout(() => {
                window.removeEventListener('click', () => {})
                window.removeEventListener('dblclick', () => {})
                textHTML.textContent = `одинарных кликов: ${countClick}, двойных кликов: ${countDblClick}`
                setTimeout(() => {
                    this.#removeTextHTML()
                }, TIME_TIMER + 1000)
            }, TIME_TIMER)
        }, 0)
    }
}