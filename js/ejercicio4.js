class Producto {
  constructor(parametrocodigo, parametronombre, parametroprecio) {
    this.codigo = parametrocodigo;
    this.nombre = parametronombre;
    this.precio = parametroprecio;
  }
  imprimir() {
    document.write(`<p>codigo ${this.codigo}</p>`);
    document.write(`<p>nombre ${this.nombre}</p>`);
    document.write(`<p>precio ${this.precio}</p>`);
  }
}

//no sabria como guardarlo en un array


let leche = new Producto(" c232323 "," Serenisima ", 60 );
console.log(leche);
let yogurt = new Producto("c242424", "Ser", 80);
let hamburguesa = new Producto("c252525", "paty", 79);


leche.imprimir();