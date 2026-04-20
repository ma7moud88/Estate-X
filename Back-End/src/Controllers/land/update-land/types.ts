

export type IParamsUpdateLand = {
    id: string
};

export type IRequestUpdateLand = {
    description?: string;
    location?: string;
    area?: number;
    price?: number;
    landImages?: string[];
    status?: string;
    type?: string;
    about?: string | null;
};

export type IResponseUpdateLand = {
    id: string;
};