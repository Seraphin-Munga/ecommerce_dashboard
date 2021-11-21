import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { OrderRetrievalModel } from 'src/app/core/models/order-retrieval.model';
import { OrderResourceService } from 'src/app/core/services/order-resource.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public displayedColumns: string[] = ['_order_orderDate', '_order_quatity', '_order_totalPrice', '_order_orderNumber', 'action'];
  public orsers: Array<OrderRetrievalModel> = [];

  public constructor(
    private readonly _orderResourceService: OrderResourceService,
    private readonly _router: Router

  ) { }

  public async ngOnInit(): Promise<void> {
    this.orsers = await this.getOrders();
  }

  public async getOrders(): Promise<Array<OrderRetrievalModel>> {
    return this._orderResourceService.get();
  }

  public view(orderModel: OrderRetrievalModel): void {
    const navigationExtras: NavigationExtras = {
      state: {
        data: orderModel,
      },
    };
    this._router.navigate(["/order/orders/order-items"], navigationExtras);
  }

}
