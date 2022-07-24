export interface IBasicCommodity {
  id: number;
  region?: string;
  price?: string;
  commodity?: string;
}

export interface ICommodityItemAPI {
  value: string;
  name: string;
  display: string;
  id: number;
}

interface ICommodityListAPI {
  [key: string]: ICommodityItemAPI[] | undefined;
}

export interface ICommodityResponseAPI {
  national_commodity_price: ICommodityListAPI;
}
