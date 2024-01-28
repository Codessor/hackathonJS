import { Module } from '../core/module';

export class ShootingRangeModule extends Module {
    #countGood
    #countBad
    #nickName
    #time

    constructor(type, text) {
        super(type, text);
        this.#time = 30;
        this.#countGood=0;
        this.#countBad=0;
        this.#nickName='';
    }
    #setTime (value) {
      const timeEl = document.querySelector('#time')
      timeEl.innerHTML = `00:${value}`
    }
    
    #createTimer(){
      const timer = document.createElement('div')
      timer.innerHTML+=`<h3>Осталось <span id="time">00:00</span></h3>`
    }
    #startGame(){
      this.#createTimer()
      setInterval(this.#decreaseTime, 1000)
      this.#createRandomTarget()
      this.#setTime(this.#time)  
    }
    #decreaseTime() {
      if (this.#time === 0) {
        this.#finishGame()
      } else {
        let current = --(this.#time)
        if (current < 10) {
          current = `0${current}`
        }
        this.#setTime(current)
      }
    }
    #getRandomNumber(min, max) {
      return Math.round(Math.random() * (max - min) + min)
    }

    #createRandomTarget() {
      const circle = document.createElement('div')
      const size = this.#getRandomNumber(10,60)
      // const {width, height} = board.getBoundingClientRect()
      const x = this.#getRandomNumber(0, 1000)
      const y = this.#getRandomNumber(0, 1000)
      // const x = getRandomNumber(0, width - size)
      // const y = getRandomNumber(0, height - size)
      const color = '#ffffff'
    
      circle.classList.add('circle')
      circle.style.width = `${size}px`
      circle.style.height = `${size}px`
      circle.style.top = `${y}px`
      circle.style.left = `${x}px`
      circle.style.background = color
    
      document.body.append(circle)
    }

    #createStartBlockHTML(){
      const startBlock = document.createElement('div')
      startBlock.className='shooting-range-start-block'
      startBlock.innerHTML+=`<div class="shooting-range-form">
      <h1>Тир</h1>
        <div class="shooting-range-form">
            <label for="sr-nickname" >Введите ваш никнейм:</label>
            <input type="text" class="sr-nickname" placeholder="никнейм" value="" name="nickname-input">
        </div>
        <div class="sr-form-btn">
            <button type="button" class="sr-form-btn-start" name="start-button" style="success">Старт!</button>
        </div>
      </div>`
      document.body.append(startBlock)
      document.querySelector
    }
    #finishGame(){

    }
    
    trigger() { 
      this.#createStartBlockHTML()
      const startForm = document.querySelector('.shooting-range-start-block')
      startForm.addEventListener('click', (event)=>{
        const {target} = event
        if (target === document.querySelector('.sr-form-btn-start')){
          this.#nickName = document.querySelector('.sr-nickname').value
          this.#startGame()
        }
      })
      
      
    }
}