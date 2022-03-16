import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ponte',
  templateUrl: './ponte.component.html',
  styleUrls: ['./ponte.component.css']
})
export class PonteComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/inicio'])
  }

}
