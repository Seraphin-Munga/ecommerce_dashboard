import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderItemsRetrievalModel } from "src/app/core/models/order-items-retrieval.model";
import { OrderRetrievalModel } from "src/app/core/models/order-retrieval.model";
import { OrderResourceService } from "src/app/core/services/order-resource.service";

@Component({
  selector: "app-order-items",
  templateUrl: "./order-items.component.html",
  styleUrls: ["./order-items.component.scss"],
})
export class OrderItemsComponent implements OnInit {
  public order!: any;
  public orderCustomerDetail!: any
  public orderItems: Array<OrderItemsRetrievalModel> = [];
  public displayedColumns: string[] = [
    "_product_productName",
    "_product_price",
    "_product_quantity",
  ];

  public constructor(
    private readonly _router: Router,
    private readonly _orderResourceService: OrderResourceService
  ) {
    if (this._router.getCurrentNavigation()?.extras.state) {
      this.order = this._router.getCurrentNavigation()?.extras.state;
    }
  }

  public async ngOnInit(): Promise<void> {
    this.orderItems = await this.getOrderItems();
    this.orderCustomerDetail = this.order.data;
  }

  public async getOrderItems(): Promise<Array<OrderItemsRetrievalModel>> {
    return this._orderResourceService.orderItems(this.order.data._order_orderID);
  }
}
