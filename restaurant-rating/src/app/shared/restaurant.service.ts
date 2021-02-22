import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  formData : Restaurant
  list : Restaurant[];
  readonly rootUrl = "http://localhost:7071/api"

  constructor(private http : HttpClient) { }

  postRestaurant(formData : Restaurant){
    return this.http.post(this.rootUrl+'/restaurant',formData)
  }

  refreshList(){
    this.http.get(this.rootUrl+'/restaurant')
    .toPromise().then(res => this.list = res as Restaurant[]);
  }
}
