class Persona{
    nombre
    codigo
    frase
    comidaFavorita
    
    constructor(nombre, codigo, frase){
    this.nombre = nombre
    this.codigo = codigo
    this.frase = frase
    }

    set setComidaFavorita(comida){
        this.comidaFavorita = comida.toUpperCase()
    }

    get getComidaFavorita(){
        console.log(`la comida favorita de ${this.nombre} es ${this.comidaFavorita}`)
    }

    quiensoy(){
        console.log(`Yo soy ${this.nombre} y mi frase favorita es '${this.frase}'`)
    }
}

const shesho = new Persona('sergio', 25, 'Que lindo es vivir')
console.log(shesho)
shesho.setComidaFavorita = 'Bandeja Paisa'
shesho.getComidaFavorita

const Alex = new Persona('Alexander', 21, 'Tú no metes cabra')
console.log(Alex)
Alex.setComidaFavorita = 'Spaguetti'
Alex.getComidaFavorita

const Pablo = new Persona('Juan Pablo', 20, 'Que dice Toallin')
console.log(Pablo)
Pablo.setComidaFavorita = 'Hamburguesa'
Pablo.getComidaFavorita

const Andrea = new Persona('Yury Andrea', 35, 'Portesé bien')
console.log(Andrea)
Andrea.setComidaFavorita = 'Lentejas'
Andrea.getComidaFavorita

Alex.quiensoy()
shesho.quiensoy()
Pablo.quiensoy()
Andrea.quiensoy()