export interface IProduct {
    status: boolean;
    result: ResultPro[];
}

export interface ResultPro {
    id:    number;
    cid:   number;
    name:  string;
    image: string;
    text:  string;
    price: number;
}
