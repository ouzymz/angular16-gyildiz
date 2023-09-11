import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  constructor(private userService: UserService) {}

  // user: string;

  userCreate(userName: string) {
    debugger;
    // this.user = userName;
    this.userService.addUser(userName);
  }
}
