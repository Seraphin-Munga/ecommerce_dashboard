import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderItemsRetrievalModel } from '../models/order-items-retrieval.model';
import { OrderRetrievalModel } from '../models/order-retrieval.model';

@Injectable({
  providedIn: 'root'
})
export class OrderResourceService {

  public constructor(
    private readonly _http: HttpClient
  ) { }

  public async get(): Promise<Array<OrderRetrievalModel>> {
    try {
      const response = await this._http
        .get<Array<OrderRetrievalModel>>(
          `${environment.serverApiUrl}Order`
        )
        .toPromise();
      return response;
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error(
          'A connection could not be established. Please contact an administrator.'
        );
      }
      throw Error(error.error);
    }
  }

  public async orderItems(orderID: string, customerID: string): Promise<OrderItemsRetrievalModel> {
    try {
      const response = await this._http
        .get<OrderItemsRetrievalModel>(
          `${environment.serverApiUrl}Order/${orderID}/${customerID}`
        )
        .toPromise();
      return response;
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error(
          'A connection could not be established. Please contact an administrator.'
        );
      }
      throw Error(error.error);
    }
  }


}
