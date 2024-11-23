import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
    definition:{
        openapi: "3.0.0",
        info: { title: "ShorkLabAPI", version: "1.0.0" },
    },
    apis:[
        "src/routes/shortRoutes.js", "src/controllers/ShortController.js"
    ]
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec)
    })
}

export default swaggerDocs;