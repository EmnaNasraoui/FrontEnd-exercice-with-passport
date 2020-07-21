import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private apiService: ApiService, private router: Router) {
    this.registerForm = new FormGroup({
      First_Name: new FormControl(''),

      Last_Name: new FormControl(''),

      Email: new FormControl(''),

      Password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }
  userRegister() {
    console.log(this.registerForm.value);

    this.apiService.registerUser(this.registerForm.value).subscribe((data: any) => {
      console.log(data);
      this.router.navigateByUrl('/auth/login');
    });
  }
}
