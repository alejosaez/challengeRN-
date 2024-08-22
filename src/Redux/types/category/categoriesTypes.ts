export interface Category {
    category_id: string;
    name: string;
  }
  
  export type CategoriesResponse = Category[];
  
  export interface CategoryState {
    allCategories: CategoriesResponse; 
    loading: boolean;
    error: string | null;
  }
  