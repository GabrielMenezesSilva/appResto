export interface RestoCategorie {
    title: string;
    uuid: string;
    recipes: RestoRecipe[];
}
export interface RestoRecipe{
    description: string;
    title: string;
    uuid: string;
    imageUrl: string;
    price: number;
}

export interface APIResponse {
    title: string;
    data: RestoCategorie[];
}