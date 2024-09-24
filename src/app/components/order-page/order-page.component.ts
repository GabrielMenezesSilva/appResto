import { Component, inject, OnInit } from '@angular/core';
import { RestoCategorie } from '../../interfaces';
import { APIService } from '../../api.service';
import {
  AsyncPipe,
  CurrencyPipe,
  JsonPipe,
  NgFor,
  NgIf,
  UpperCasePipe,
} from '@angular/common';
import { filterByCategoryIdPipe } from '../../pipes/filterByCategoryID/filter-by-category-id.pipe';
import { MenuCategoriesComponent } from '../menu-categories/menu-categories.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonHeader,
  IonCardTitle,
  IonCardContent,
  IonSplitPane,
  IonMenu,
  IonAvatar,
  IonButton,
  IonNote,
  IonIcon, IonCardHeader, IonFooter, IonToggle, IonToolbar } from '@ionic/angular/standalone';
import { DividPipe } from '../../pipes/divid/divid.pipe';
import { addIcons } from 'ionicons';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [IonToolbar, IonToggle, IonFooter, IonCardHeader, 
    IonIcon,
    IonNote,
    IonButton,
    IonAvatar,
    IonSplitPane,
    IonCardContent,
    IonCardTitle,
    IonHeader,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    NgFor,
    UpperCasePipe,
    filterByCategoryIdPipe,
    AsyncPipe,
    NgIf,
    MenuCategoriesComponent,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    IonContent,
    CurrencyPipe,
    DividPipe,
    IonMenu,
    RouterLink
  ],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss',
})
export class OrderPageComponent implements OnInit {
  title = 'Pizza';
  email: string = '';

  categories$: Promise<RestoCategorie[]> = inject(APIService).getRecipes();
  selectedCategoryId: string = '01489fc9-0be3-424e-a276-33e393062072';
  hello = console.log(this.categories$);

  orderForm = new FormArray(
    [] as any,
    Validators.compose([
      Validators.minLength(2),
      Validators.required,
      // PREçO MINIMO DA COMPRA
      // MUDAR AQUI O VALIDATOR PARA MODIFICAR AS REGRAS DO CHECKOUT
    ])
  );

  constructor(private readonly _service: APIService) {
    // this._service.getRecipes()
    this.categories$ = this._service.getRecipes();
    addIcons({ addCircleOutline, removeCircleOutline });
  }
  ngOnInit(): void {
    console.log('init');
    
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    
  }

  addToForm(id: string, price: number) {
    const itemExist = this.orderForm.value.findIndex(
      (element: { id: string }) => element.id === id
    );

    if (itemExist >= 0) {
      let quantity: number =
        this.orderForm.at(itemExist).get('quantity')?.value || 1;
      this.orderForm.at(itemExist).get('quantity')?.patchValue(++quantity);
    } else {
      const itemCtrl = new FormGroup({
        quantity: new FormControl(1),
        id: new FormControl(id),
        price: new FormControl(price),
      });
      this.orderForm.push(itemCtrl);
    }
    console.log(this.orderForm.value, this.orderForm.valid);
  }

  deleteToForm(id: string, price: number) {
    const itemExist = this.orderForm.value.findIndex(
      (element: { id: string }) => element.id === id
    );

    if (itemExist >= 0) {
      let quantity: number =
        this.orderForm.at(itemExist).get('quantity')?.value || 1;
      quantity--;
      if (quantity <= 0) {
        this.orderForm.removeAt(itemExist);
      } else {
        this.orderForm.at(itemExist).get('quantity')?.patchValue(quantity);
      }
    }

    console.log(this.orderForm.value, this.orderForm.valid);
  }
}
