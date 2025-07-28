export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  [key: string]: any; // Agar qo‘shimcha maydonlar bo‘lsa
}
