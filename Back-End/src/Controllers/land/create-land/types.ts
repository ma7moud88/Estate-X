
export interface IRequestCreateLand {
    description: string;
    location: string;
    area: number;
    price: number;
    landImages?: string[];
    status: string;
    type: string;
    about?: string;
    // owner: string;
}