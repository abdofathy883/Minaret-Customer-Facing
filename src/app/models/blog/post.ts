export interface Post {
    id: number;
    title: string;
    content: string;
    featuredImage: string;
    categoryId?: number;
    category: string;
    featured: boolean;
}

export interface BlogCategory {
    id: number;
    name: string;
}
