import dotenv from "dotenv";

dotenv.config();

const envVariables = {
  PORT: process.env.PORT || 8000,
  MONGO_URI: process.env.MONGO_URI,
};

export default envVariables;
