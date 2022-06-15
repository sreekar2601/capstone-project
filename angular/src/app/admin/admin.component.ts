import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  username!: string;
  password!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  login() {
    if (this.username == 'admin' && this.password == 'admin@123') {
      alert('login success');
      this.router.navigate(['/adminoperations']);
    } else {
      alert('enter correct details');
    }
  }
}
