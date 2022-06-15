import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLogin } from '../customer-login';
import { CustomerLoginService } from '../customer-login.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(
    private customerservice: CustomerLoginService,
    private router: Router
  ) {}
  customerlogin: CustomerLogin = new CustomerLogin();

  ngOnInit(): void {}
  customerlogins() {
    console.log(this.customerlogin);
    this.customerservice.logincustomer(this.customerlogin).subscribe(
      (data) => {
        alert('Login Successfully');
        this.goto();
      },
      (error) => alert('Please Enter Correct Details')
    );
  }
  goto() {
    this.router.navigate(['/customeroperations']);
  }
}
