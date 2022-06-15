import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EngineerLogin } from '../engineer-login';
import { EngineerLoginService } from '../engineer-login.service';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css'],
})
export class EngineerComponent implements OnInit {
  constructor(
    private engineerservice: EngineerLoginService,
    private router: Router
  ) {}

  engineerlogin: EngineerLogin = new EngineerLogin();
  ngOnInit(): void {}
  engineerlogins() {
    console.log(this.engineerlogin);
    this.engineerservice.loginengineer(this.engineerlogin).subscribe(
      (data) => {
        alert('Login Successfully');
        this.router.navigate(['engineer/engineeroperations']);
      },
      (error) => alert('Please Enter Correct Details')
    );
  }
}
