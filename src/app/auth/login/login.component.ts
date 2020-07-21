import { ApiService } from '../../api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private apiService: ApiService, private router: Router) {
    this.loginForm = new FormGroup({

      Email: new FormControl(''),

      Password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }
  userLogin() {
    console.log(this.loginForm.value);

    this.apiService.loginUser(this.loginForm.value).subscribe((data: any) => {
      console.log(data);
      this.apiService.setToken(data.token);
      this.router.navigateByUrl('/home')
    });
  }
}
