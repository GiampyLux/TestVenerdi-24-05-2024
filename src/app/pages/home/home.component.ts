import { Icars } from './../../models/icars';
import { Component, OnInit } from '@angular/core';
import { IcarsService } from '../../models/icars.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  cars: Icars[] = [];
  constructor(private carsService:IcarsService) {

  }
  ngOnInit() {
    this.carsService.getCars().subscribe((data:Icars[]) => {
      this.cars = data;
    })
}

}
