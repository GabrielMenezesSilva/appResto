import { Component, OnInit } from '@angular/core';
import { APIService } from "../../api.service";
import { RestoCategorie } from "../../interfaces";
import { AsyncPipe, NgFor, UpperCasePipe } from "@angular/common";
import { FilterByCategoryIDPipe } from "../../pipes/filterByCategoryID/filter-by-category-id.pipe";

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [NgFor, UpperCasePipe, FilterByCategoryIDPipe, AsyncPipe],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export  class OrderPageComponent {
  title = 'resto';
  categories!: RestoCategorie[];
  categories$: Promise<RestoCategorie[]> = new APIService().getRecipes();

  }

