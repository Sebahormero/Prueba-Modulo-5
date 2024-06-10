import Animal from './Animal.js';

export default class Lobo extends Animal {
    constructor(nombre, edad, comentarios, imagen, sonido) {
        super(nombre, edad, comentarios, imagen, sonido);
    }

    aullar() {
        const audio = new Audio(this.getSonido());
        audio.play();
    }
}
