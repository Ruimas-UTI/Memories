import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://Memories:memories123@cluster0.8rxa2.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => app.listen(PORT, () => console.log(`Server running at ${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
