export interface Product {
  id: number;
  name: string;
  flavor: string;
  description: string;
  tagline: string;
  price: number;
  color: string;
  accent: string;
  textColor: string;
  bgGradient: string;
  emoji: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
