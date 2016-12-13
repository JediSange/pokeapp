import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Gym, User, UserServiceService } from '../user-service.service';

interface TrainerFormData {
  name: string;
  age: string;
  gym: string;
  favorite: string;
  money: number;
}

type Transform<T, U> = <T, U>(x: T) => U;

const convertTrainerFormData: (trainerFormData: TrainerFormData) => User =
  (trainerFormData) => {
    return {
      name: trainerFormData.name,
      age: +trainerFormData.age,
      gym: trainerFormData.gym as Gym,
      favorite: trainerFormData.favorite,
      money: trainerFormData.money,
    };
  };

@Component({
  selector: 'app-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.css'],
})
export class TrainerInfoComponent implements OnInit {
  notificationModalClosed = true;

  user: User;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(user => {
        this.user = user;
      });
  }

  updateInfo(trainerForm: NgForm) {
    if (trainerForm.valid) {
      const user = convertTrainerFormData(trainerForm.value);

      this.userService.updateInfo(user)
        .subscribe(result => {
          // alert('Updated user info!');
          this.notificationModalClosed = false;
        });
    }
  }

}

// 1. Favorite Pokemon
// 2. Money

