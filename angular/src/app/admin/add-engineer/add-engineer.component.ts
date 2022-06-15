import { Component, OnInit } from '@angular/core';
import { Engineer } from 'src/app/engineer';
import { EngineerService } from 'src/app/engineer.service';

@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.css'],
})
export class AddEngineerComponent implements OnInit {
  engineer: Engineer = new Engineer();
  constructor(private engineerservice: EngineerService) {}

  ngOnInit(): void {}
  saveengineer() {
    this.engineerservice.createmanager(this.engineer).subscribe(
      (data) => {
        alert('engineer added');
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  onsubmit() {
    this.saveengineer();
  }
}
