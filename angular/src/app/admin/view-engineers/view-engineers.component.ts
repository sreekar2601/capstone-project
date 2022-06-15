import { Component, OnInit } from '@angular/core';
import { Engineer } from 'src/app/engineer';
import { EngineerService } from 'src/app/engineer.service';

@Component({
  selector: 'app-view-engineers',
  templateUrl: './view-engineers.component.html',
  styleUrls: ['./view-engineers.component.css'],
})
export class ViewEngineersComponent implements OnInit {
  engineers!: Engineer[];
  constructor(private engineerservice: EngineerService) {}

  ngOnInit(): void {
    this.getengineer();
  }
  private getengineer() {
    this.engineerservice.getengineers().subscribe((data) => {
      this.engineers = data;
    });
  }
}
