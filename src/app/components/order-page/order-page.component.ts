import { Component, inject } from '@angular/core';
import { APIService } from "../../api.service";
import { RestoCategorie } from "../../interfaces";
import { AsyncPipe, NgFor, UpperCasePipe, CommonModule} from "@angular/common";
import { FilterByCategoryIDPipe } from "../../pipes/filterByCategoryID/filter-by-category-id.pipe";
import { FormArray, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';  // Importation de FormsModule

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [NgFor, UpperCasePipe, FilterByCategoryIDPipe, AsyncPipe, CommonModule, FormsModule],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {
  title = 'resto';
  categories!: RestoCategorie[];
  categories$;
  selectedCategoryId: string = '01489fc9-0be3-424e-a276-33e393062072';


  orderForm = new FormArray([] as any, Validators.compose([
    Validators.minLength(1)
  ]));

  constructor(
    private readonly _service: APIService
    ) {
      this.categories$ = this._service.getRecipes();
     }
  


  addToForm(id: string, price: number) {
    // check si la recette choisie est deja dans la liste de comande

    const itemExist = this.orderForm.value.findIndex((element: {id: string}) => element.id === id);

    //si oui on increment la quantity
    if(itemExist >= 0) {
      const quantity: number = this.orderForm.at(itemExist).get('quantity')?.value || 1;
      this.orderForm.at(itemExist).get('quantity')?.patchValue(quantity + 1)
    }

    //si non on creer le ctrl et on le met dans la liste de comande
    else{
      const itemCtrl = new FormGroup({
        quantity: new FormControl(1),
        id: new FormControl(id),
        price: new FormControl(price)
      });

      this.orderForm.push(itemCtrl)
    }

    console.log(this.orderForm.value, this.orderForm.valid);
  }

  // Adicionar função para remover item do pedido

  deleteToForm(id: string, price: number) {
    const itemExist = this.orderForm.value.findIndex((element: {id: string}) => element.id === id);

    if (itemExist >= 0) {
      let quantity: number = this.orderForm.at(itemExist).get('quantity')?.value || 1;
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
