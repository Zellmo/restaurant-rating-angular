import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantService } from 'src/app/shared/restaurant.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(public service : RestaurantService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      restaurant_name: '',
      full_address: '',
      restaurant_description: '',
      opens: '',
      closes: '',
      averageRating: ''
    }
  }

  onSubmit(form:NgForm){
this.insertRecord(form);
  }
  insertRecord(form:NgForm){
    this.service.postRestaurant(form.value).subscribe(res => {this.resetForm(form)})
  }
}
