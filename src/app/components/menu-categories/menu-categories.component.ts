import { NgFor, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestoCategorie } from '../../interfaces';
import { IonList, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu-categories',
  standalone: true,
  imports: [IonLabel, IonItem, IonList, NgFor, UpperCasePipe],
  templateUrl: './menu-categories.component.html',
  styleUrl: './menu-categories.component.scss'
})
export class MenuCategoriesComponent {
  @Input() categories!: RestoCategorie[]
  @Output() selectedEvent : EventEmitter<string> = new EventEmitter()
}