import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./data/schema";
import root from "./data/resolver";
import "dotenv/config";
import connecToDB from "./utils/connectDb";
const app = express();

app.get("/", (req, res, next) => {
  res.send("graphql is awesome");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

connecToDB()
  .then(() => {
    const host = process.env.serverHost as string;
    const port = Number(process.env.serverPort || process.env.PORT);
    app.listen(port, host, () => {
      console.log(`running server on port http://${host}:${port}/graphql`);
    });
  })
  .catch((err) => {
    console.log("damn project can not started");
    process.exit(1);
  });
