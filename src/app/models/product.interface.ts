export interface Product {
    uid: string;
    name: string;
    quantity: number;
    date: Date;
    provider_uid: string;
    status: string;
    category: string;

    buy_price?: number;
    stock?: number;
    stock_min?: number;
    media?: string;
    last_update?: Date;
  }