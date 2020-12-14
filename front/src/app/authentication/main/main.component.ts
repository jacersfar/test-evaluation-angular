import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  email: string  = '';
  password: string = '';
  failed: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public authenticate() {
    this.userService.authenticate(this.email, this.password).subscribe(
      respone => {
        if (respone.success) {
          if (JSON.parse(atob(respone.token.split('.')[1])).admin) {
            localStorage.setItem('token', respone.token);
            this.router.navigate(['/dashboard']);
          }
        }
        else {
          this.failed = true;
        }
      }
    )
  }
}
