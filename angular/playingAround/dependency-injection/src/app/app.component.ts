import { OnInit, Component } from '@angular/core';
import { User } from 'src/assets/models/user.model';
import { UserService } from 'src/assets/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Liste d'utilisateur";
  show:boolean = false;
  listOfUser:User[];

  constructor(private user:UserService) {
    this.listOfUser = this.getUsers();
  }

  ngOnInit() {

  }

  getUsers() {
    return this.user.getUsers()
  }
}
