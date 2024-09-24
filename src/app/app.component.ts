import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { APIService } from './api.service';
import { RestoCategorie } from './interfaces';
import {OrderPageComponent} from './components/order-page/order-page.component';
import { NgFor, NgStyle, SlicePipe, UpperCasePipe } from '@angular/common';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import '@khmyznikov/pwa-install';
import { UpdatesComponent } from "./components/update/update.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, OrderPageComponent, NgStyle, NgFor, SlicePipe, UpperCasePipe, IonRouterOutlet, UpdatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
