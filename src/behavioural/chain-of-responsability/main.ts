import { CeoBudgetHandler } from './ceo-budget-handler';
import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandler } from './director-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { SellerBudgetHandler } from './seller-budget-handler';

const costumerBudget = new CustomerBudget(1001);

const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CeoBudgetHandler());

seller.handle(costumerBudget);
console.log(costumerBudget);
