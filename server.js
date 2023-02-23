import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.listen(process.env.PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
