import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignengineer } from 'src/app/assignengineer';
import { AssignengineerService } from 'src/app/assignengineer.service';

@Component({
  selector: 'app-assignengineer',
  templateUrl: './assignengineer.component.html',
  styleUrls: ['./assignengineer.component.css'],
})
export class AssignengineerComponent implements OnInit {
  assignengineers!: Assignengineer[];
  constructor(
    private assignengineerservice: AssignengineerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.assignengineerservice.getcomplaints().subscribe((data) => {
      this.assignengineers = data;
    });
  }

  assignengineering(name: string) {
    this.router.navigate(['assignengineer/actualassign', name]);
  }
}
