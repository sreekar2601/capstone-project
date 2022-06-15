import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(private customerservice: CustomerService) {}

  ngOnInit(): void {}
  savecustomer() {
    this.customerservice.createcustomer(this.customer).subscribe(
      (data) => {
        alert('customer added');
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onsubmit() {
    this.savecustomer();
  }
}
