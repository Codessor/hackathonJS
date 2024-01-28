import { Module } from '@/core/module'
import { clearWindows } from '@/utils'

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    clearWindows()
    function randomPositionBox() {
      if (document.querySelector("div.box") !== null) {
        const deleteBox = document.querySelector("div.box");
        deleteBox.remove();
        getRandonBox();
      } else {
        getRandonBox();
      }
    }

    function getRandonBox() {
      const divBoxRandom = document.createElement("div");
      divBoxRandom.className = "box";
      document.body.append(divBoxRandom);
      const boxRandom = document.querySelector(".box");
      boxRandom.style.position = "fixed";
      boxRandom.style.borderRadius = `${Math.floor(Math.random() * 50)}%`;
      boxRandom.style.top = `${Math.floor(Math.random() * 101)}%`;
      boxRandom.style.left = `${Math.floor(Math.random() * 50 + 1)}%`;
      boxRandom.style.right = `${Math.floor(Math.random() * 50 + 1)}%`;
      boxRandom.style.width = `${Math.floor(Math.random() * 60 + 10)}%`;
      boxRandom.style.height = `${Math.floor(Math.random() * 60 + 10)}%`;
      boxRandom.style.background = `#${Math.random().toString(16).slice(3, 9)}`;
      boxRandom.style.boxShadow = "4px 4px 14px rgba(0, 0, 0, 0.5)";
      boxRandom.addEventListener("click", (event) => {
        const { target } = event;
        if (target) {
          randomPositionBox();
        }
      });
    }
    randomPositionBox();
  }
}