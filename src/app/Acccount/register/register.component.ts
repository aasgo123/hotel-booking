import { ToastrService } from 'ngx-toastr';
import { RegModel } from './../../Models/RegModel';
import { LoginViewModel } from './../../Models/LoginViewModel';
import { AccountService } from './../../Service/account.service';
import { ValidationsService } from './../../Service/validations.service';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { LoginDetails } from 'src/app/Models/loginDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  Login: FormGroup;
  submitted: boolean;
  login = false;
  log: LoginViewModel;
  reg: RegModel;
  constructor(
    private fb: FormBuilder,private toastr:ToastrService,
    private customValidator: ValidationsService, private authenticationservice: AccountService, private route: Router){
  }
  ngOnInit() {
    this.registerForm = this.fb.group({

      Email: ['', [Validators.required, Validators.email]],

      Password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      ConfirmPassword: ['', [Validators.required]]

    },
      {
        validator: this.customValidator.MatchPassword('Password', 'ConfirmPassword'),
      }
    );

    this.Login = this.fb.group({

      email: ['', [Validators.required, Validators.email]],

      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])]


     } );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  get LoginFormControl() {
    return this.Login.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.invalid && this.submitted == true) {
    return;
    }
    // tslint:disable-next-line: max-line-length

    this.authenticationservice.Register(this.registerForm.value).subscribe((data: any) =>
    {alert("Registerd Succesfully")
  this.registerForm.reset(); },
    (err: HttpErrorResponse) =>
    {
      alert(err.message);
    });




  }
    onLogin()
    {
      console.log(this.Login.value.email);
      this.login = true;
      this.log = {Email: this.Login.value.email, Password: this.Login.value.password };
      // tslint:disable-next-line: triple-equals
      if (this.Login.invalid && this.login == true)
      {

return;
      }
      this.authenticationservice.userAuthentication(this.Login.value.email, this.Login.value.password).subscribe((data: any) => {
        localStorage.setItem('Token', data.access_token);
        console.log(data.acces_token + 'sucess');


      },
      (err: HttpErrorResponse) => {alert(err.message); });

      if (localStorage.getItem('Token') != null)
      { console.log(this.log);
        alert('logging in')
        this.authenticationservice.UserLogin(this.log).subscribe((detail: LoginDetails) => {
          localStorage.setItem('Email', detail.Email);
          localStorage.setItem('UserId', detail.userID.toString());
          console.log(detail.Role);
          // tslint:disable-next-line: no-unused-expression
          if (detail.Role == 'Customer') {
          this.route.navigate(['/Customer']);
          }
        else if (detail.Role == 'Admin') {
            this.route.navigate(['/Admin']);
          }
          else {
            this.route.navigate(['/Employee']);
          }

        },
        (err: HttpErrorResponse) => {alert('error in login' + err.message); });
      }
      // tslint:disable-next-line: prefer-const


    }

}
