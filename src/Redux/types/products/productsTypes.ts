// src/types.ts

export interface Size {
    size_id: string;
    name: string;
    additional_price: number;
  }
  
  export interface Combination {
    combination_id: string;
    name: string;
    additional_price: number;
  }
  
  export interface Product {
    product_id: string;
    name: string;
    unit_price: number;
    description: string;
    image_url: string;
    category_id: string;
    Sizes: Size[];
    Combinations: Combination[];
  }
  
 export interface CreateProductData {
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
    size_id: string;
    name: string;
    additional_price: number;
  }
  
  export interface Combination {
    combination_id: string;
    name: string;
    additional_price: number;
  }
  
  export interface Product {
    product_id: string;
    name: string;
    unit_price: number;
    description: string;
    image_url: string;
    category_id: string;
    Sizes: Size[];
    Combinations: Combination[];
  }
  
  export interface ProductState {
    allProducts: Product[];
    isEditable: boolean,
    product: Product|null,
    loading: boolean;
    error: string | null;
  }
  