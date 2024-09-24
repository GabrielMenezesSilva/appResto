import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { APIService } from './api.service';
import { RestoCategorie } from './interfaces';
import {OrderPageComponent} from './components/order-page/order-page.component';
import { NgFor, NgStyle, SlicePipe, UpperCasePipe } from '@angular/common';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, OrderPageComponent, NgStyle, NgFor, SlicePipe, UpperCasePipe, IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'appResto';
  categories!: RestoCategorie[];

  async ngOnInit(): Promise<void> {
    const value = await new APIService().getRecipes();
    console.log(value);
    this.categories = value;
  }
}
