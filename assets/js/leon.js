import Animal from './Animal.js';

export default class Leon extends Animal {
    constructor(nombre, edad, comentarios, imagen, sonido) {
        super(nombre, edad, comentarios, imagen, sonido);
    }

    rugir() {
        const audio = new Audio(this.getSonido());
        audio.play();
    }
}
