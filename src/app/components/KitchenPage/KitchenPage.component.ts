import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>KitchenPage works!</p>`,
  styleUrl: './KitchenPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitchenPageComponent { }
