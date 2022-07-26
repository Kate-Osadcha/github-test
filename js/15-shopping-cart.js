/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: 'apple', price: 50 }
 * { name: 'grapes', price: 70 }
 * { name: 'lemon', price: 60 }
 * { name: 'strawberry', price: 110 }
 */

const shoppingCart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantiti += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantiti: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (productName === item.name) {
        console.log("знайшли:", productName);
        console.log("индекс:", i);
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const item of items) {
      total += item.price * item.quantiti;
    }
    return total;
  },
  // increaseQuantity(productName) {},
  // decreaseQuantity(productName) {},
};

console.log(shoppingCart.getItems());

shoppingCart.add({ name: "apple", price: 50 });
shoppingCart.add({ name: "apple", price: 50 });
shoppingCart.add({ name: "apple", price: 50 });
shoppingCart.add({ name: "apple", price: 50 });
shoppingCart.add({ name: "apple", price: 50 });
shoppingCart.add({ name: "grapes", price: 70 });
shoppingCart.add({ name: "lemon", price: 60 });
shoppingCart.add({ name: "lemon", price: 60 });
shoppingCart.add({ name: "strawberry", price: 110 });
shoppingCart.add({ name: "strawberry", price: 110 });
shoppingCart.add({ name: "strawberry", price: 110 });

console.table(shoppingCart.getItems());

console.log("Total: ", shoppingCart.countTotalPrice());

shoppingCart.remove("apple");
console.table(shoppingCart.getItems());

shoppingCart.clear();
console.log(shoppingCart.getItems());
