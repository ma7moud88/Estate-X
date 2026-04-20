export type IResponseGetAllLand = {
    description: string;
    location: string;
    area: number;
    price: number;
    landImages?: string[];
    status: string;
    type: string;
    about?: string | null;
}[];