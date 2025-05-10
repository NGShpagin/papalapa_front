export interface PaginatedItem<T> {
    data: T[];
    page: number;
    limit: number;
    total: number;
    pages: number;
}