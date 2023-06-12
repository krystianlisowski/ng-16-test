export interface ApiResponse<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}
