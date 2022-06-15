import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerLogin } from '../manager-login';
import { ManagerLoginService } from '../manager-login.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  constructor(private manager: ManagerLoginService, private router: Router) {}

  managerlogin: ManagerLogin = new ManagerLogin();
  ngOnInit(): void {}
  managerlogins() {
    console.log(this.managerlogin);
    this.manager.loginmanager(this.managerlogin).subscribe(
      (data) => {
        alert('Login Successfully');
        this.router.navigate(['manager/assignengineer']);
      },
      (error) => alert('Please Enter Correct Details')
    );
  }
}
