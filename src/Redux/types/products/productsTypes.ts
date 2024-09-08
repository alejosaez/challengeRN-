// src/types.ts

export interface Size {
  size_id: string
  name: string
  additional_price: number
}

export interface Combination {
  combination_id: string
  name: string
  additional_price: number
}

export interface Product {
  product_id: string
  name: string
  unit_price: number
  description: string
  image_url: string
  category_id: string
  Sizes: Size[]
  Combinations: Combination[]
}

export interface CreateProductData {
  product_id?: string
  name: string
  unit_price: number
  description: string
  image_url: string
  category_id: string
  sizes: string[]
  combinations: string[]
}

export interface ProductResponse {
  product_id: string
  name: string
  unit_price: number
  description: string
  image_url: string
  category_id: string
}
// src/types/productTypes.ts

export interface Size {
  size_id: string
  name: string
  additional_price: number
}

export interface Combination {
  combination_id: string
  name: string
  additional_price: number
}

export interface Product {
  product_id: string
  name: string
  unit_price: number
  description: string
  image_url: string
  category_id: string
  Sizes: Size[]
  Combinations: Combination[]
}

export interface ProductState {
  allProducts: Product[]
  filteredProducts: ProductSearchResponse[]
  isEditable: boolean
  product: Product | null
  loading: boolean
  error: string | null
}

export interface Category {
  category_id: string;
  name: string;
}

export interface ProductSearchResponse {
  product_id: string;
  name: string;
  unit_price: number;
  description: string;
  image_url: string;
  Category: Category; // Objeto de categoría en lugar de solo ID
  Sizes: Size[];
  Combinations: Combination[];
}