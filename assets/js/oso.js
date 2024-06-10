import Animal from './Animal.js';

export default class Oso extends Animal {
    constructor(nombre, edad, comentarios, imagen, sonido) {
        super(nombre, edad, comentarios, imagen, sonido);
    }

    grunir() {
        const audio = new Audio(this.getSonido());
        audio.play();
    }
}
