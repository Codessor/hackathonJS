import { Module } from '../core/module'

export class ShootingRangeModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
      let durationTimer = 15  
      function getStartShootingRangeModal() {
        const startModal = document.createElement('div')
        startModal.className='shooting-range-start-modal'
        const btn15 = document.createElement('button')
        const btn30 = document.createElement('button')
        const btn60 = document.createElement('button')
        btn15.className='shooting-range-start-modal-button'
        btn15.textContent='15 секунд'
        btn30.className='shooting-range-start-modal-button'
        btn30.textContent='30 секунд'
        btn60.className='shooting-range-start-modal-button'
        btn60.textContent='60 секунд'
        const helloMessage = document.createElement('p')
        helloMessage.className='shooting-range-start-modal-text'
        helloMessage.textContent = 'Выбери один из трех вариантов длительности сессии и запусти игру, с помощью кнопки "Старт"'
        const Startbtn = document.createElement('button')
        Startbtn.className='shooting-range-start-modal-button'
        Startbtn.textContent='Старт'
        startModal.append(helloMessage, btn15, btn30,btn60, Startbtn)
        document.body.prepend(startModal)
        startModal.addEventListener('click', (event) => {
          const { target } = event
          if(target === btn15){
            durationTimer = 15
          } else if (target === btn30){
            durationTimer = 30
          } else if (target === btn60){
            durationTimer = 60
          } else if (target === Startbtn){
            startGame(durationTimer)
          }
        })
      }
      function startGame(durationTimer){
        const startModal=document.querySelector('.shooting-range-start-modal')
        startModal.style.display='none'

      }
      getStartShootingRangeModal()
      
    }
}