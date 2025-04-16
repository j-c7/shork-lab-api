import express from "express";
import dotenv from "dotenv";
import shortRoutes from "./src/routes/shortRoutes.js";
import swaggerDocs from "./src/routes/swagger/v1/swagger.js";

const app = express();
app.use(express.json());
dotenv.config();

const corsUrl = [process.env.CLIENT_URL] || ["*"]
//console.log(corsUrl)

// Cors
app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Access-Control-Allow-Credentials', true)
    next()
})

app.use("/api/short", shortRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}`);
    swaggerDocs(app, PORT);
})