import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isFormValid = false;

  constructor(private sessionService: SessionService,
              private router: Router) {
  }
  
  initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(1)])
    });
    this.loginForm.valueChanges.subscribe(value => {
      if (this.loginForm.valid) {
        this.isFormValid = true;
      }
      else {
        this.isFormValid = false;
      }
    })
  }
  
  ngOnInit(): void {
    this.initForm();
  }

  async logIn(): Promise<void> {
    if (this.loginForm.valid) {
      try {
        await this.sessionService.login(this.loginForm.value);
        this.router.navigate(['team']);
      }
      catch(error) {
        console.log(error);
      }
    }
    else {
      console.log('INVALID');
    }
  }

}
