class Libro{
    constructor(ISBN, titulo, autor, numeroDePaginas){
        this.isbn = ISBN
        this.titulo = titulo
        this.autor = autor
        this.numeroPaginas = numeroDePaginas
    }
    set modificiarisbn(nuevoCodigoisbn) {
        this.modificiarisbn = nuevoCodigoisbn;
      }
      set modificartitulo(nuevotitulo) {
        this.titulo = nuevotitulo;
      }
      set modificarautor(nuevoautor){
          this.autor = nuevoautor
      }
      set modificarNumeroDepaginas(nuevasPaginas){
          this.numeroPaginas = nuevasPaginas
      }
    
      get mostrarnuevoisbn() {
        return this.isbn;
      }
      get mostrartitulo() {
        return this.titulo;
      }
      get mostrarAutor(){
          return this.autor
      }
      get mostrarPaginas(){
          return this.numeroPaginas
      }

      mostrarLibro(){
          document.write(`el libro${this.titulo} con isbn${this.isbn} creado por el autor${this.autor} tiene paginas${this.numeroPaginas}`)
      }
}

let libro1 = new Libro(2019,"el principito","Hugo morales",213)
libro1.mostrarLibro()
let libro2 = new Libro(2020,"los arboles mueren de pie","alberto miglio",214)
console.log(libro2)
libro2.mostrarLibro()
