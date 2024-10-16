import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); // Pedente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pedente
order.shipOrder();
order.rejectPayment(); // Daqui não altera mais o estado.
order.approvePayment();
order.waitPayment();
order.shipOrder();
