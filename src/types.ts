export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: { name: string };
}

export interface ProductsState {
  products: ProductType[];
  liked: ProductType[];
  isLoading: boolean;
  currentPage: number;
}

export interface RootState {
  products: ProductsState;
}
