import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class DiscountDefault extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150 && total <= 199) {
      this.discount = 5;
    }

    return total - total * (this.discount / 100);
  }
}
