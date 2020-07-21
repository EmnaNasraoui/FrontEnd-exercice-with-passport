import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  isLoggedIn: any;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.apiService.isLoggedIn();
    console.log(this.isLoggedIn);
    if (this.isLoggedIn == false) {
      swal("Oops!", "You have to login!", "error");
      this.router.navigateByUrl('/auth/login');

    }
    if (this.isLoggedIn == true) {
      this.apiService.allUsers().subscribe((data: any) => {
        console.log(data);
        this.users = data.data;
      });
    }

  }
  logOut() {
    this.apiService.logout();
    this.router.navigateByUrl('/auth/login');

  }

}
