/*
 * Классы
 * - объявление
 * - конструктор
 * - методы
 * - static
 * - приватные свойства
 * - геттеры и сеттеры
 * - синтаксис публичных свойства и методы классов
 */

class Car {
  static description = "Класс описывающий автомобиль";

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }
}

const carInstance = new Car({
  brand: "Audi",
  model: "Q3",
  price: 35000,
});

console.log(carInstance.model);
carInstance.model = "Q4";
console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 60000;
console.log(carInstance.price);

console.log(carInstance);
///////////////////////////////////////////////////////////////////////////////

/*
 * Наследование
 *  - extends
 *  - super()
 */

class Hero {
  constructor({ name = "hero", xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} отримує ${amount}`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакує використовуючи ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

const ajax = new Berserk({
  name: "ajax",
  xp: 500,
  weapon: "axe",
  warcry: "waaaaaaaah",
});

console.log(ajax);
ajax.babyRage();
ajax.attack();
ajax.gainXp();

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} что-то там кастует 🧙‍♂️`);
  }
}

const mango = new Warrior({ name: "mango", xp: 1000, weapon: "алебарда" });
console.log(mango);
mango.attack();
mango.gainXp(1000);

const poly = new Mage({ name: "poly", xp: 500, spells: ["фаербол"] });
console.log(poly);
poly.cast();
poly.gainXp(200);
