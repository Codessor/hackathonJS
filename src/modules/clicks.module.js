import { Module } from '@/core/module'
import { TIME_TIMER } from '@/consts'

export class ClicksModule extends Module {
    #countClick
    #countDblClick

    constructor(type, text) {
        super(type, text)
    }

    #createTextHTML() {
        const textHTML = document.createElement('span')
        textHTML.className = 'text-block'
        return textHTML
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

        const body = document.querySelector('body')
        const textHTML = this.#createTextHTML()
        const timeHTML = this.#createTextHTML()
        body.insertAdjacentElement('afterbegin', textHTML)
        body.insertAdjacentElement('afterbegin', timeHTML)

        const startTime = new Date()

        setTimeout(() => {
            this.#countClick = this.#count()
            this.#countDblClick = this.#count()

            window.addEventListener('click', () => {
                countClick = this.#countClick()
            })

            window.addEventListener('dblclick', () => {
                countDblClick = this.#countDblClick()
            })

            const intervalId = setInterval(() => {
                const currentTime = new Date()
                const elapsedTime = currentTime - startTime
                const remainingTime = Math.max(0, TIME_TIMER - elapsedTime)

                timeHTML.textContent = `Осталось: ${Math.round(remainingTime / 1000)} секунд`

                if (remainingTime === 0) {
                    clearInterval(intervalId)
                    timeHTML.remove()
                    textHTML.textContent = `одинарных кликов: ${countClick}, двойных кликов: ${countDblClick}`
                    setTimeout(() => {
                        textHTML.remove()
                    }, TIME_TIMER - 1500);
                    window.removeEventListener('click', () => {})
                    window.removeEventListener('dblclick', () => {})
                }
            }, 1000)
        }, 0)
    }
}