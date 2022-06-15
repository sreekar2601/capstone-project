import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/manager';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css'],
})
export class AddManagerComponent implements OnInit {
  manager: Manager = new Manager();
  constructor(private managerservice: ManagerService) {}

  savemanager() {
    this.managerservice.createmanager(this.manager).subscribe(
      (data) => {
        alert('manager added');
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  ngOnInit(): void {}
  onsubmit() {
    console.log(this.manager);
    this.savemanager();
  }
}
