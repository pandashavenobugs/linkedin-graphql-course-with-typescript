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
    return products;
  } catch (error) {
    throw error;
  }
}

export async function createProduct({input}:{input:ProductInput}) {
  try {
    const newProduct = await ProductModel.create({ ...input });
    return newProduct.toJSON();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateProduct ({id,input}:{id:string,input:Omit< ProductInput,'stores'>}) {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(id,input,{new:true});
    return updatedProduct;
  } catch (err) {
    throw err;
  }
}
export async function deleteProduct({id}:{id:string}) {
  try {
    console.log(id);
    await ProductModel.findByIdAndDelete(id);
    return{
      message:"product deleted succesfully"
    }
  } catch (err) {
    throw(err);
    
  }
}
