import { getProduct, getProducts, createProduct ,updateProduct,deleteProduct} from "./getProducResolver";
const root = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
export default root;
