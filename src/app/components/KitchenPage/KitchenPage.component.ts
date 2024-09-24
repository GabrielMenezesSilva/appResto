import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-kitchen-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
  ],
  templateUrl: './KitchenPage.component.html',
  styleUrl: './KitchenPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitchenPageComponent { }
