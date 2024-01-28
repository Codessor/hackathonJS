import { Module } from '@/core/module'
import { clearWindows } from '@/utils'

export class TimerModule extends Module {
    #countdown

    constructor(type, text) {
        super(type, text)
    }

    #createTimerHTML() {
        const container = document.createElement('div')
        container.className = 'timer-block'
        const timer = document.createElement('span')
        timer.className = 'timer-block_timer'
        container.append(timer)

        const button = document.createElement('button')
        button.className = 'timer-block_button'
        button.textContent = 'отключить'
        container.append(button)

        return container
    }

    #removeTimerHTML() {
        const timerBlock = document.querySelector('.timer-block')
        timerBlock.remove()
        clearInterval(this.#countdown)
        document.title = 'Context Menu'
    }

    #timer(seconds) {
        const currentTime = Date.now()
        const endTime = currentTime + seconds * 1000

        this.#displayTimer(seconds)

        this.#countdown = setInterval(() => {
            const secondsLeft = Math.round((endTime - Date.now()) / 1000)

            if (secondsLeft < 0) {
                this.#removeTimerHTML()
                return
            }

            this.#displayTimer(secondsLeft)
        }, 1000)
    }

    #displayTimer(seconds) {
        const timerBlock = document.querySelector('.timer-block_timer')
        const minutes = Math.floor(seconds / 60)
        const remainderSeconds = seconds % 60

        const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
        timerBlock.textContent = display
        document.title = display
    }

    trigger() {
        clearWindows()
        const time = Number(prompt('Введите время в секундах: ', '60').trim())
        if (time && time <= 3600) {
            const body = document.querySelector('body')
            const timerBlock = this.#createTimerHTML()
            body.insertAdjacentElement('afterbegin', timerBlock)
            this.#timer(time)
            const button = document.querySelector('.timer-block_button')
            if (button) {
                button.addEventListener('click', () => {
                    this.#removeTimerHTML()
                })
            }
        } else if (time > 3600) {
            alert('Введите время больше часа, повторите операцию!')
        } else {
            alert('Вы ввели неверные данные, повторите операцию!')
        }
    }
}