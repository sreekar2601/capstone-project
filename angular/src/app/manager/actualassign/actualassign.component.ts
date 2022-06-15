import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignengineer } from 'src/app/assignengineer';
import { AssignengineerService } from 'src/app/assignengineer.service';

@Component({
  selector: 'app-actualassign',
  templateUrl: './actualassign.component.html',
  styleUrls: ['./actualassign.component.css'],
})
export class ActualassignComponent implements OnInit {
  name!: string;
  assignengineer: Assignengineer = new Assignengineer();
  constructor(
    private service: AssignengineerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.service.getcomplaintbyname(this.name).subscribe(
      (data) => {
        this.assignengineer = data;
      },
      (error) => console.log(error)
    );
  }
  onsubmit() {
    this.service
      .updatecomplaintbyname(this.name, this.assignengineer)
      .subscribe((data) => {
        alert('Engineer Assigned');
        this.goto();
      });
  }
  goto() {
    this.router.navigate(['/manager/assignengineer']);
  }
}
