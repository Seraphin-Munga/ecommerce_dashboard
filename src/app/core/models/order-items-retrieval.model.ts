import { Icustomer } from "./customer";
import { IOrderItems } from "./orderItems";

export interface OrderItemsRetrievalModel {

    orderItems: Array<IOrderItems>,
    customerDetail: Icustomer

}
