class Rectangulos {
  constructor(parametroancho, parametroalto) {
    this.ancho = parametroancho;
    this.alto = parametroalto;
  }
  perimetro(parametroancho, parametroalto) {
    let resultado = parametroalto * 2 + parametroancho * 2;
    document.write("el perimetro es " + resultado);
  }
  area(parametroancho, parametroalto) {
    let resultado = parametroancho*parametroalto;
    document.write( "el area es " + resultado);
  }
}

let rectanguloA = new Rectangulos();

let parametroalto =parseInt(prompt("ingrese un de los lados del rectangulo"));
console.log(parametroalto);

let parametroancho =parseInt(prompt("ingrese uno de los lados pisos del rectangulo"));
console.log(parametroancho);

rectanguloA.perimetro(parametroancho, parametroalto);
rectanguloA.area(parametroancho, parametroalto);

