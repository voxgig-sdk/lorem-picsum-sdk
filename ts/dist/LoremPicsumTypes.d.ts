export interface GetRandomImage {
    id?: string;
}
export interface GetRandomImageLoadMatch {
    height: number;
    width: number;
    blur?: number;
    grayscale?: boolean;
    random?: number;
}
export interface GetRandomSquareImage {
    id?: string;
}
export interface GetRandomSquareImageLoadMatch {
    id: number;
    blur?: number;
    grayscale?: boolean;
}
export interface Height {
}
export interface HeightLoadMatch {
    height: number;
    width: number;
    blur?: number;
    grayscale?: boolean;
}
export interface Heightwebp {
}
export interface HeightwebpLoadMatch {
    height: number;
    width: number;
    blur?: number;
    grayscale?: boolean;
}
export interface IdInfo {
    author: string;
    download_url: string;
    height: number;
    id: string;
    url: string;
    width: number;
}
export interface IdInfoLoadMatch {
    id: string;
}
export interface Idn {
    id?: string;
}
export interface IdnLoadMatch {
    height: number;
    id: string;
    width: number;
    blur?: number;
    grayscale?: boolean;
}
export interface List {
    author: string;
    download_url: string;
    height: number;
    id: string;
    url: string;
    width: number;
}
export interface ListListMatch {
    limit?: number;
    page?: number;
}
export interface Seed {
    id?: string;
}
export interface SeedLoadMatch {
    height: number;
    seed: string;
    width: number;
    blur?: number;
    grayscale?: boolean;
}
export interface SeedInfo {
    author: string;
    download_url: string;
    height: number;
    id: string;
    url: string;
    width: number;
}
export interface SeedInfoLoadMatch {
    id: string;
}
