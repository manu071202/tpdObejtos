class Persona{
    constructor(parametronombre, parametroedad, parametroDNI, parametroSexo, parametropeso, parametroAltura, AnioDeNacimiento){
           this.nombre = parametronombre
           this.edad = parametroedad
           this.dni = parametroDNI
           this.sexo = parametroSexo
           this.peso = parametropeso
           this.altura = parametroAltura
           this.nacimiento = AnioDeNacimiento
    }
    mostrarGeneracion(){
        //corroborar si la pregunta esta bien -si nace en 1994 y 2010, hace esto-
        if( 1994&&2010 < this.nacimiento){
            document.write("esta persona es de la Generacion Z, Rasgo caracteristico: IRREVERENCIA ") 
        }else if( 1981&&1993 < this.nacimiento){ 
            document.write("Esta persona es de la Generacion Y, Rasgo caracteristico: Frustacion")
        }else if( 1969&&1980 < this.nacimiento){
            document.write("esta persona s de la Generacion X, Rasgo caracteristico: Obsesion por el exito")
        }else if(1949&&1968 < this.nacimiento ){
            document.write("esta persona s de la Baby Boom, Rasgo caracteristico: Ambicion")
        }else if(1930&&1948 < this.nacimiento ){
            document.write("esta persona s de la Silent Generation, Rasgo caracteristico: Austeridad");
        }
}
}
let Rau = new Persona("Raul","19","44616026","hombre","60kg","1,80",2002)
Rau.mostrarGeneracion();
console.log(Rau)