import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-engineer-operations',
  templateUrl: './engineer-operations.component.html',
  styleUrls: ['./engineer-operations.component.css'],
})
export class EngineerOperationsComponent implements OnInit {
  constructor(private service: CustomerService, private router: Router) {}
  customers!: Customer[];
  ngOnInit(): void {
    this.service.getcustomers().subscribe((data) => {
      this.customers = data;
    });
  }
  changestatus(name: string) {
    this.router.navigate(['engineeroperations/changestatus', name]);
  }
}
