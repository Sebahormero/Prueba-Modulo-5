export default class Animal {
    constructor(nombre, edad, comentarios, imagen, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.comentarios = comentarios;
        this.imagen = imagen;
        this.sonido = sonido;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getComentarios() {
        return this.comentarios;
    }

    getImagen() {
        return this.imagen;
    }

    getSonido() {
        return this.sonido;
    }

    setComentarios(nuevosComentarios) {
        this.comentarios = nuevosComentarios;
    }
}
