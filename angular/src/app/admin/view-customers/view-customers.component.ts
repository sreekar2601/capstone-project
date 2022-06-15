import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css'],
})
export class ViewCustomersComponent implements OnInit {
  customers!: Customer[];
  constructor(private customerservice: CustomerService) {}

  ngOnInit(): void {
    this.getcustomer();
  }
  private getcustomer() {
    this.customerservice.getcustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}
