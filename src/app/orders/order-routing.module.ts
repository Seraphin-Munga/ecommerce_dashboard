import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardLayoutComponent } from "../layouts/components/dashboard/dashboard-layout.component";
import { OrderItemsComponent } from "./components/order-items/order-items.component";
import { OrdersComponent } from "./components/orders/orders.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardLayoutComponent,
    children: [
      { path: "orders", component: OrdersComponent },
      { path: "orders/order-items", component: OrderItemsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule { }
