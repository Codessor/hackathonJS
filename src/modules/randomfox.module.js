import {Module} from '../core/module'
import { random } from '../utils';

export class RandomFoxModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() { // логику прописываем здесь, для расчёта используем файл utils.js
        const foxLoader = document.createElement('span')
        foxLoader.removeAttribute('hidden')
        foxLoader.textContent = 'Loading...'
        document.body.append(foxLoader)
        if(document.querySelector('.fox-container')) {
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
            catch(error) {
                throw new Error(error)
            }
            finally {
                foxLoader.setAttribute('hidden', '')
            }
        }
        getRandomFox()
    }
}