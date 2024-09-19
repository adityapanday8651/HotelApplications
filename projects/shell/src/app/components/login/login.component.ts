import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup | any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  
  ngOnInit(): void {
    this.loginReactiveForms();
  }

  isUserNameInvalid(): boolean {
    const control = this.loginForm.get('username');
    return control && control.invalid && (control.dirty || control.touched);
  }
  isPasswordInvalid(): boolean {
    const control = this.loginForm.get('password');
    return control && control.invalid && (control.dirty || control.touched);
  }



  public async loginReactiveForms() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }
  onLogin(){
    console.log("this.loginForm.valid : ", this.loginForm.value)
  }

  // onLogin(): void {

  //   console.log("this.loginForm.valid : ", this.loginForm.value)
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe(
  //       () => {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: "Login Successfully",
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         this.loginForm.reset();
  //         this.router.navigate(['/home']);
  //       },
  //       error => {
  //         console.error('Login failed', error);
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "error",
  //           title: "User Unauthorized",
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //       }
  //     );
  //   }
  // }

}
