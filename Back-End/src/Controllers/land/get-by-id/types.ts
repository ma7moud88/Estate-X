export type IParamsGetLandById = {
    id: string;
}
export type IResponseGetLanById = {
    description: string;
    location: string;
    area: number;
    price: number;
    landImages?: string[];
    status: string;
    type: string;
    about?: string | null;
}
