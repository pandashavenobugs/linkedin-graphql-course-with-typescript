import { buildSchema } from "graphql";

const schema = buildSchema(`

  type Product{
    id: ID
    name: String
    description: String
    price: Float
    soldout: Soldout
    inventory:Int
    stores: [Store]!
  }

  enum Soldout{
    SOLDOUT
    ONSALE
  }

  type Store{
    id:String
    store:String
  }
  type Query{
    getProducts: [Product]
    getProduct(id:ID): Product
  }

  input StoreInput{
    store: String
  }
  input ProductInput{
    name: String
    description: String
    price: Float
    soldout: Soldout
    inventory:Int
    stores: [StoreInput]!
  }
  input updateProductInput{
    name:String
    description: String
    price: Float
    soldout: Soldout
    inventory:Int
  }
  type DeleteProductMessage{
    message:String
  }
  type Mutation{
    createProduct(input:ProductInput):Product
    updateProduct(id:ID,input:updateProductInput):Product
    deleteProduct(id:ID):DeleteProductMessage
  }
  

`);

export { schema };
