import { Injectable } from "@angular/core";
import { APIResponse, RestoCategorie } from "./interfaces";

@Injectable({
    providedIn: 'root'
})

export class APIService{

    async getRecipes() {
        const url = "./resto-data.json";
        const result: APIResponse = await fetch(url).then(response => response.json());
        return result.data; 
    }
}