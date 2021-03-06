import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    sessionStorage.removeItem('userSession');
    this.router.navigate(['auth']);
  }

}
