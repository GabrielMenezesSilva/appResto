export interface RestoCategorie {
    title: string;
    uuid: string;
    recipe: RestoRecipe[];
}
export interface RestoRecipe{
    description: string;
    title: string;
    uuid: string;
    imageUrl: string;
    price: number;
}