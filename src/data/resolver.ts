import crypto from "crypto";
import { getProduct, getProducts, createProduct } from "./getProducResolver";
class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  soldout: "ONSALE" | "SOLDOUT";
  inventory: number;
  stores: { store: string }[];
  constructor(id: string, productInput: ProductInput) {
    this.id = id;
    this.name = productInput.name;
    this.description = productInput.description;
    this.price = productInput.price;
    this.soldout = productInput.soldout;
    this.stores = productInput.stores;
    this.inventory = productInput.inventory;
  }
}
interface ProductDataBase {
  [id: string]: ProductInput;
}
interface ProductInput {
  name: string;
  description: string;
  price: number;
  soldout: "SOLDOUT" | "ONSALE";
  inventory: number;
  stores: {
    store: string;
  }[];
}
const productDataBase: ProductDataBase = {};
const root = {
  getProduct,
  // getProduct: ({ id }: { id: string }) => {
  //   return new Product(id, productDataBase[id]);
  // },
  getProducts,
  createProduct,
  // getProducts: () => {
  //   return new Product("123", {
  //     name: "berat",
  //     description: "handsome shit",
  //     price: 1000000,
  //     soldout: "ONSALE",
  //     inventory: 21,
  //     stores: [{ store: "storeName" }, { store: "store-2" }],
  //   });
  // },

  // createProduct: ({ input }: { input: ProductInput }) => {
  //   console.log(input);
  //   const id = crypto.randomBytes(10).toString("hex");
  //   productDataBase[id] = input;
  //   return new Product(id, input);
  // },
};
export default root;
