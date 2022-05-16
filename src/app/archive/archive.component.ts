import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  year:any;
  month:any;
  constructor(private actRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    let params = this.actRoute.snapshot.paramMap; 
    this.year = params.get('year');
    this.month = params.get('month');
  }

  viewAll() {
      this.router.navigate(['/']);
  }

}
