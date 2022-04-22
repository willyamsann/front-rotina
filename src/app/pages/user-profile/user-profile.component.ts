import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  user: User = {
    name: "Willyam",
  };
  constructor(private userSerice: UserService) {}

  ngOnInit() {}

  postUser() {
    this.userSerice.postUser(this.user).subscribe((res) => {
      console.log(res);
    });
  }
}
