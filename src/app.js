import './styles.css';
import { ContextMenu } from './menu';
import { ClicksModule } from '@/modules/clicks.module';
import { ShapeModule } from '@/modules/shape.module';
import { TimerModule } from '@/modules/timer.module';
import { SoundModule } from '@/modules/sound.module';
import { BackgroundModule } from '@/modules/background.module';
import { MessageModule } from '@/modules/message.module';
import { RandomFoxModule } from '@/modules/randomfox.module';
import { ShootingRangeModule } from '@/modules/shootingRange.module';

const ulHTML = document.querySelector('ul');
const contextMenu = new ContextMenu(ulHTML.localName);

const clickModule = new ClicksModule('clicks', 'Считать клики (за 3 секунды)');
const shapeModule = new ShapeModule('shape', 'Создать фигуру');
const timerModule = new TimerModule('timer', 'Вызвать таймер');
const soundModule = new SoundModule('sound', 'Вызвать звук');
const backgroundModule = new BackgroundModule('background', 'Поменять цвет');
const messageModule = new MessageModule('message', 'Вызвать сообщение');
const randomFoxModule = new RandomFoxModule('randomFox', 'Случайная лиса');
const shootingRangeModule = new ShootingRangeModule('shootingRange', 'Тир');

contextMenu.add(clickModule);
contextMenu.add(shapeModule);
contextMenu.add(timerModule);
contextMenu.add(soundModule);
contextMenu.add(backgroundModule);
contextMenu.add(messageModule);
contextMenu.add(randomFoxModule);
contextMenu.add(shootingRangeModule);

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    let x = event.clientX, y = event.clientY,
        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        cmWidth = ulHTML.offsetWidth,
        cmHeight = ulHTML.offsetHeight;

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

    ulHTML.style.left = `${x}px`;
    ulHTML.style.top = `${y}px`;
    contextMenu.open();
})

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type;
    switch (type) {
        case 'clicks':
            clickModule.trigger();
            contextMenu.close();
            break
        case 'shape':
            shapeModule.trigger();
            contextMenu.close();
            break
        case 'timer':
            timerModule.trigger();
            contextMenu.close();
            break
        case 'sound':
            soundModule.trigger();
            contextMenu.close();
            break
        case 'background':
            backgroundModule.trigger();
            contextMenu.close();
            break
        case 'message':
            messageModule.trigger();
            contextMenu.close();
            break
        case 'randomFox':
            randomFoxModule.trigger();
            contextMenu.close();
            break
        case 'shootingRange':
            shootingRangeModule.trigger();
            contextMenu.close();
            break
    }
})