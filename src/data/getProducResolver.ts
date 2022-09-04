import ProductModel, { ProductInput } from "../model/product.model";

export async function getProduct({ id }: { id: string }) {
  try {
    const product = await ProductModel.findById({ _id: id });
    return product;
  } catch (error) {
    throw error;
  }
}

export async function getProducts() {
  try {
    const products = await ProductModel.find();
  } catch (error) {
    throw error;
  }
}

export async function createProduct(productInput: ProductInput) {
  try {
    const newProduct = await ProductModel.create({ ...productInput });
    return newProduct;
  } catch (error) {
    throw error;
  }
}
