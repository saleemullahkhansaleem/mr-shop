import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL!, {
      dbName: "mr_shop",
    });
    console.log("DB connected");
    console.log("DB connected to host: ", connection.host);
  } catch (error) {
    console.log("DB connection faild");
    console.log(error);
  }
};
