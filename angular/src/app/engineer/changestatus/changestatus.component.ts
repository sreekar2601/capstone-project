import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-changestatus',
  templateUrl: './changestatus.component.html',
  styleUrls: ['./changestatus.component.css'],
})
export class ChangestatusComponent implements OnInit {
  name!: string;
  customer: Customer = new Customer();
  constructor(
    private service: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.service.getcomplaintbyname(this.name).subscribe(
      (data) => {
        this.customer = data;
      },
      (error) => console.log(error)
    );
  }

  onsubmit() {
    this.service
      .updatecustomerbyname(this.name, this.customer)
      .subscribe((data) => {
        alert('status changed');
      });
  }
}
