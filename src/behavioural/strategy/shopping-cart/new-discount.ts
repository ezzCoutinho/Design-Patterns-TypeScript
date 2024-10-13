import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class NewDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total <= 199) {
      this.discount = 10;
    }

    return total - total * (this.discount / 100);
  }
}
