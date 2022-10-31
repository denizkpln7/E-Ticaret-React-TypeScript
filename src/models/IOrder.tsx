export interface IOrder {
    status: boolean;
    result: ResultOrder[];
}

export interface ResultOrder {
    id:    number;
    email: string;
    name:  string;
    text:  string;
    price: number;
}
