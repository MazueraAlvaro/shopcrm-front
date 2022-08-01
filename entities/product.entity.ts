export interface Product {
  id: number;
  name: string;
  category_id: number;
  price: number;
  images: Array<string>;
  description: string;
  score: number;
}
