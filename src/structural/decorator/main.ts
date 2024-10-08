import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const printedTShirt = new ProductStampDecorator(tShirt);
const tShirtStampFrontAndBack = new ProductStampDecorator(printedTShirt);
console.log(tShirt.getPrice(), tShirt.getName());
console.log(printedTShirt.getPrice(), printedTShirt.getName());
console.log(
  tShirtStampFrontAndBack.getPrice(),
  tShirtStampFrontAndBack.getName(),
);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
