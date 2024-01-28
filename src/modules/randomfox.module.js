import { Module } from '../core/module'
import { random, clearWindows } from '../utils';

export class RandomFoxModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
        clearWindows()
        const foxLoader = document.createElement('span')
        foxLoader.textContent = 'Loading...'
        document.body.append(foxLoader)
        if (document.querySelector('.fox-container')) {
            const foxImage = document.querySelector('.fox-container')
            foxImage.remove()
        }
        async function getRandomFox() {
            try {
                const response = await fetch(`https://randomfox.ca/images/${random(1, 123)}.jpg`)
                document.body.insertAdjacentHTML('beforeend', `
                    <div class="fox-container">
                        <img src="${response.url}" class="fox-image">
                    </div>
                `)
            }
            catch (error) {
                throw new Error(error)
            }
            finally {
                foxLoader.remove()
                const foxImage = document.querySelector('.fox-container')
                foxImage.style.opacity = 1
                setTimeout(() => {
                    setInterval(() => {
                        foxImage.style.opacity -= 0.05
                        if (foxImage.style.opacity <= 0) {
                            foxImage.remove()
                        }
                    }, 35)
                }, 4000)
            }
        }
        getRandomFox()
    }
}