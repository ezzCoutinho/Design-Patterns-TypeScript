// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DiscountDefault } from './shopping-cart/discount-default';
import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
// shoppingCart.discount = new DiscountDefault();
// shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
