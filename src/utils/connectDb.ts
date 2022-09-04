import mongoose from "mongoose";
import "dotenv/config";

const connecToDB = async () => {
  const dbHost = process.env.dbHost as string;
  const dbPort = Number(process.env.dbPort);
  const dbUri = `mongodb://${dbHost}:${dbPort}`;
  const dbName = process.env.dbname;
  return mongoose.connect(dbUri, {
    dbName,
  });
};

export default connecToDB;
