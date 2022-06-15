import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customercomplaint } from 'src/app/customercomplaint';
import { CustomercomplaintService } from 'src/app/customercomplaint.service';

@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.css'],
})
export class ViewcomplaintComponent implements OnInit {
  name: string = 'sreekar';
  complaints1: Customercomplaint = new Customercomplaint();
  complaints!: Customercomplaint[];
  constructor(
    private service: CustomercomplaintService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.service.getcomplaintbyname('sreekar').subscribe(
      (data) => {
        this.complaints = data;
      },
      (error) => console.log(error)
    );
  }
}
