export type GuitarItem = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type Cart = GuitarItem & {
  quantity: number;
};

export type Alert = {
    message: string
    type: string
}