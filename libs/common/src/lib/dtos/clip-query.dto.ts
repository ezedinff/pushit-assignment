export type ClipQuery = {
    sortBy?: 'id' | 'date';
    sortDirection?: 'asc' | 'desc';
    page?: number;
    limit?: number;
}