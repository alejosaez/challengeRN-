export interface Size {
  size_id: string
  name: string
  additional_price: number
}

export interface SizeState {
  allSizes: Size[]
  loading: boolean
  error: string | null
}
