import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/manager';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-view-managers',
  templateUrl: './view-managers.component.html',
  styleUrls: ['./view-managers.component.css'],
})
export class ViewManagersComponent implements OnInit {
  managers!: Manager[];
  constructor(private managerservice: ManagerService) {}

  ngOnInit(): void {
    this.getmanager();
  }
  private getmanager() {
    this.managerservice.getmanagers().subscribe((data) => {
      this.managers = data;
    });
  }
}
