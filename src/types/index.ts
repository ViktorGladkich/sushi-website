export type ProductTag = 'vegetarisch' | 'scharf' | 'bestseller' | 'neu';

export interface Nutrition {
  calories: string; 
  protein: string;  
  fat: string;      
  carbs: string;    
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Цена в евро
  image: string; // Путь к изображению
  tags?: ProductTag[];
  longDescription: string; // Длинное описание для модального окна
  ingredients: string[];   // Список ингредиентов
  allergens?: string[];    // Необязательный список аллергенов
  nutrition?: Nutrition;

}

// Описываем, как выглядит одна категория в меню
export interface Category {
  id: string; // Например, "klassische-maki", "spezial-rollen"
  name: string; // "Klassische Maki"
  products: Product[]; // Массив товаров, которые принадлежат этой категории
}