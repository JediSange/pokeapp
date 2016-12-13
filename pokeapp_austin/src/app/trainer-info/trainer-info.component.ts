import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService} from '../user.service';

@Component({
  selector: 'app-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.css']
})
export class TrainerInfoComponent implements OnInit {
  name;
  age;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  updateInfo(trainerInfo: NgForm) {
    console.log('trainer info', trainerInfo);
    
    this.userService.updateInfo(trainerInfo.value).subscribe( result => {
        console.log("successfully updated trainer info"); 
    });
  }

}
