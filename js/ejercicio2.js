class Cuenta {
  constructor(nombreCompleto, dni, clave, titular, saldo) {
    this.nombre = nombreCompleto;
    this.dni = dni;
    this.clave = clave;
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(montoingresar) {
    this.saldo + montoingresar;
  }
  extraer(extraer) {
    if (this.saldo >= extraer) {
      extraer -= this.saldosaldo;
    } else {
      alert("fondos insuficientes");
    }
  }
  informar() {
    document.write(`la cuenta de ${this.nombre} tiene de saldo ${this.saldo}`);
  }
}

let Alex = new Cuenta("Alex", 44616027, "pasw11", "manu",0);

let deposito = parseInt(prompt("ingrese un monto"));
console.log(deposito);
Cuenta.ingresar(deposito);

let extraer = parseInt(prompt("retire un monto"));
console.log(extraer);

//no encuentro la falla del codigo, por que no me muestra el metodo ingresar por ende ningun metodo posterior