// PROGRAMACION ORIENTADA A OBJETOS
// el signo _ o  # signo numeral es para saver q es una propiedad privada
// el signo $ es para saver q es una propiedad publica
const _private = new WeakMap();

class Book {
  // ====== Método constructor ======
  constructor(title, author, price) {
    // ====== Propiedades ======
    const properties = {
      _title: title,
      _author: author,
      _price: price,
    };
    // Colocar propiedades como privadas:
    _private.set(this, { properties });
  }

  // ====== Métodos / Getters-Setters ======

  // Obtiene el título de un libro:
  get title() {
    return _private.get(this).properties["_title"];
  }

  // Setea/modifica el título de un libro:
  // sino queremos mostrar este metodo lo quitamos
  set title(newTitle) {
    return (_private.get(this).properties["_title"] = newTitle);
  }

  get author() {
    return _private.get(this).properties["_author"];
  }

  set author(newTitle) {
    return (_private.get(this).properties["_author"] = newTitle);
  }

  get price() {
    return _private.get(this).properties["_price"];
  }

  set price(newTitle) {
    return (_private.get(this).properties["_price"] = newTitle);
  }

  // ====== POLIMOFIRMOS ======
  getAllData = () => {
    console.log(
      `Title : ${this.title} Author: ${this.author} Price: ${this.price}`
    );
  };
}

//====== Instanciar ======
class Animes extends Book {
  constructor(title, author, price, illustrators) {
    super(title, author, price);
    this.illustrators = illustrators;
  }

  addUlustrator(newIlustrator = []) {
    this.illustrators.push(newIlustrator);
  }

  getAllData = () => {
    console.log(
      `Title : ${this.title} Author: ${this.author} Price: ${this.price}`
    );
    console.log(`Illustrators: ${this.illustrators}`);
  };
}

//====== Shopping ======
class Shopping {
  constructor() {
    this.product = [];
  }
  // Agregar productos:
  addProduct(amount, price) {
    this.product.push(...Array(amount).fill(price));
  }

  // mostrar productos:
  showProduct() {
    console.log(this.product);
  }

  // calcular total:
  calTotal = () => {
    return this.product.reduce((total, price) => total + price, 0);
  };
  // eliminar productos:
  deleteProduct(index) {
    this.product.splice(index, 1);
  }

  printTickets() {
    console.log(`Total a pagar: $${this.calTotal()}`);
  }
}

const book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 200);
const book2 = new Book("Poseidon", "PA. Tolkien", 400);
const anime1 = new Animes("Naruto", "Masashi Kishimoto", 300, ["Kishimoto"]);

// mostrar los datos
anime1.title = "Naruto";

console.log(book1.title);
console.log(book2.title);
console.log(anime1.title);

// agregar un nuevo ilustrador
anime1.addUlustrator("Shikamaru");
console.log(anime1.illustrators);

// vender un nuevo producto
const shopping = new Shopping();
shopping.addProduct(3, anime1.price);
shopping.addProduct(1, book1.price);
// mostrar productos
shopping.showProduct();
// calcular total
shopping.printTickets();
// eliminar producto
shopping.deleteProduct(1);
shopping.printTickets();

// ====== POLIMOFIRMOS ======
book1.getAllData();
anime1.getAllData();
