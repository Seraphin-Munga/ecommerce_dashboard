import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzUploadModule } from 'ng-zorro-antd/upload';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderItemsComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    NzGridModule,
    NzUploadModule,
    NzButtonModule
  ]
})
export class OrderModule { }
