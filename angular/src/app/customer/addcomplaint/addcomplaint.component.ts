import { Component, OnInit } from '@angular/core';
import { Customercomplaint } from 'src/app/customercomplaint';
import { CustomercomplaintService } from 'src/app/customercomplaint.service';

@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.css'],
})
export class AddcomplaintComponent implements OnInit {
  customercomplaint: Customercomplaint = new Customercomplaint();
  constructor(private service: CustomercomplaintService) {}

  ngOnInit(): void {}

  savecomplaint() {
    this.service.createcomplaint(this.customercomplaint).subscribe(
      (data) => {
        alert('complaint created');
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  onsubmit() {
    this.savecomplaint();
  }
}
