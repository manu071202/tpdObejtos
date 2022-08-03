let auto = {
   Color: ["gris cromado" , "negro", "blanco" , "amarrilo"],
   Marca: "fiat",
   Modelo: "600",
   ruedas: ["de aliasion","con tasas","combinadas"],
   gamas: {
       AireAcondicionado: true,
       baja: "base",
       media: "medio",
       alta: "tope de gama",
   },
 //metodos
   encender: function(){document.write("el auto esta encendido...")},
   apagar: function(){document.write("el auto se apagara...")},

};

console.log(auto);
document.write(`<p>${auto.Color}</p>`)
document.write(`<p>${auto.Marca}</p>`)
document.write(`<p>${auto.Modelo}</p>`)
document.write(`<p>${auto.ruedas}</p>`)

auto.encender();
auto.apagar();