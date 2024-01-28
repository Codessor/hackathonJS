import { Module } from '@/core/module'
import { clearWindows } from '@/utils'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        clearWindows()
        console.log('timer')
    }
}