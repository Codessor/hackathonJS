import { Module } from '@/core/module'
import { TIME_TIMER } from '@/consts'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
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

    trigger() {
        let countClick = 0
        let countDblClick = 0
        this.#removeTextHTML()

        const body = document.querySelector('body')
        const textHTML = this.#createTextHTML()
        const timeHTML = this.#createTextHTML()
        body.insertAdjacentElement('afterbegin', textHTML)
        body.insertAdjacentElement('afterbegin', timeHTML)

        const startTime = new Date()

        const handleClick = () => {
            countClick++
        };

        const handleDblClick = () => {
            countDblClick++
        };

        window.addEventListener('click', handleClick)
        window.addEventListener('dblclick', handleDblClick)

        const intervalId = setInterval(() => {
            const currentTime = new Date()
            const elapsedTime = currentTime - startTime
            const remainingTime = Math.max(0, (TIME_TIMER + 1000) - elapsedTime)

            timeHTML.textContent = `Осталось: ${Math.round(remainingTime / 1000)} секунд`

            if (remainingTime === 0) {
                clearInterval(intervalId)
                this.#removeTextHTML()
                textHTML.textContent = `одинарных кликов: ${countClick - 1}, двойных кликов: ${countDblClick}`
                setTimeout(() => {
                    textHTML.remove()
                }, TIME_TIMER - 1500)
                window.removeEventListener('click', handleClick)
                window.removeEventListener('dblclick', handleDblClick)
            }
        }, 1000)
    }
}